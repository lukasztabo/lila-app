/* =====================================================================
   Lila — konta i synchronizacja w chmurze (Supabase), offline-first.
   - localStorage = źródło prawdy; apka działa bez sieci dla zalogowanego.
   - Prawdziwe logowanie: imię + PIN (mapowane na e-mail techniczny + hasło).
     Każdy user = osobne konto (osobny user_id) → RLS trzyma dane osobno.
     Ten sam login na różnych urządzeniach = te same dane.
   - Przy zapisie wypycha cały `state` do game_state (debounce); przy
     logowaniu pobiera dane TEGO konta i zastępuje lokalne.
   Wymaga w index.html (przed app.js):
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
     <script src="js/cloud-config.js"></script>
   Ustawienie w Supabase: Auth → Email → "Confirm email" WYŁĄCZONE
   (logujemy się przez e-mail techniczny, więc bez potwierdzania).
   ===================================================================== */
(function(){
  const TS_KEY = 'lila.stateTs';
  const cfg = (typeof window!=='undefined' && window.LILA_CLOUD) || null;
  let client = null, user = null, pushTimer = null;

  function localTs(){ return +(localStorage.getItem(TS_KEY)||0); }
  function markLocal(){ localStorage.setItem(TS_KEY, String(Date.now())); }
  function authChanged(){ if(typeof window.onAuthChange==='function') window.onAuthChange(); }

  // imię → e-mail techniczny (unikalny, identyfikuje konto); PIN → hasło (z paddingiem na min. długość)
  function emailFor(username){
    const map={'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
    let s=String(username||'').toLowerCase().replace(/[ąćęłńóśźż]/g,c=>map[c]||c).replace(/[^a-z0-9]/g,'');
    if(!s) s='gracz';
    return s+'@lila.app';
  }
  function pwFor(pin){ return 'lila#'+String(pin||''); }

  const Cloud = {
    enabled:false, status:'off', authed:false, inited:false,

    async init(){
      if(!cfg || !cfg.url || !cfg.anonKey){ this.status='no-config'; this.inited=true; authChanged(); return; }
      if(typeof window.supabase==='undefined'){ this.status='no-lib'; this.inited=true; authChanged(); return; }
      try{
        client = window.supabase.createClient(cfg.url, cfg.anonKey, {
          auth:{ persistSession:true, autoRefreshToken:true, storageKey:'lila.auth' }
        });
        const { data:{ session } } = await client.auth.getSession();
        if(session && session.user && !session.user.is_anonymous){
          user = session.user; this.enabled=true; this.authed=true; this.status='on';
          this.inited=true; authChanged(); await this.pull();
        }else{
          if(session){ try{ await client.auth.signOut(); }catch(e){} }  // posprzątaj starą sesję anonimową
          this.status='need-login'; this.inited=true; authChanged();
        }
      }catch(e){ this.status='error'; this.inited=true; console.warn('[cloud] init', e); authChanged(); }
    },

    // ZAŁÓŻ profil — bieżący stan (localStorage) staje się danymi nowego konta
    async signUp(username, pin){
      if(!client) return { ok:false, msg:'Brak połączenia z chmurą.' };
      try{
        const email=emailFor(username), password=pwFor(pin);
        const { data, error } = await client.auth.signUp({ email, password });
        if(error){
          const dup = error.message && /already|registered|exists/i.test(error.message);
          return { ok:false, msg: dup ? 'Ten profil już istnieje — zaloguj się.' : 'Nie udało się założyć profilu.' };
        }
        let session = data.session;
        if(!session){ // gdyby mimo wszystko wymagano potwierdzenia maila — spróbuj się od razu zalogować
          const r = await client.auth.signInWithPassword({ email, password });
          session = r.data && r.data.session;
        }
        if(!session) return { ok:false, msg:'Profil założony, ale wymaga potwierdzenia maila (wyłącz to w Supabase).' };
        user = session.user; this.enabled=true; this.authed=true; this.status='on';
        await this.push(true);   // zalążek konta = obecny postęp
        markLocal(); authChanged();
        return { ok:true };
      }catch(e){ console.warn('[cloud] signUp', e); return { ok:false, msg:'Coś poszło nie tak. Spróbuj jeszcze raz.' }; }
    },

    // ZALOGUJ — wczytaj dane TEGO konta i zastąp lokalne
    async signIn(username, pin){
      if(!client) return { ok:false, msg:'Brak połączenia z chmurą.' };
      try{
        const { data, error } = await client.auth.signInWithPassword({ email:emailFor(username), password:pwFor(pin) });
        if(error) return { ok:false, msg:'Nie pamiętam takiego imienia albo PIN-u.' };
        user = data.session.user; this.enabled=true; this.authed=true; this.status='on';
        await this.pull(true);   // force: dane konta nadpisują to, co było lokalnie
        authChanged();
        return { ok:true };
      }catch(e){ console.warn('[cloud] signIn', e); return { ok:false, msg:'Coś poszło nie tak. Spróbuj jeszcze raz.' }; }
    },

    async signOut(){
      try{ if(client) await client.auth.signOut(); }catch(e){}
      user=null; this.enabled=false; this.authed=false; this.status='need-login';
      if(typeof window.resetLocalState==='function') window.resetLocalState();
      authChanged();
    },

    // pobierz zdalny stan; force=true (przy logowaniu) zawsze przyjmuje dane konta
    async pull(force){
      if(!this.enabled) return;
      try{
        const { data, error } = await client
          .from('game_state').select('state,updated_at').eq('user_id', user.id).maybeSingle();
        if(error){ console.warn('[cloud] pull', error); return; }
        if(!data){ await this.push(true); return; }   // brak zdalnego → wypchnij lokalny (zalążek)
        const remoteTs = Date.parse(data.updated_at)||0;
        if((force || remoteTs > localTs()) && data.state && typeof data.state==='object'){
          if(typeof window.adoptCloudState==='function') window.adoptCloudState(data.state);
          markLocal();
        }else{
          await this.push(true);
        }
      }catch(e){ console.warn('[cloud] pull ex', e); }
    },

    onLocalSave(){
      markLocal();
      if(!this.enabled) return;
      clearTimeout(pushTimer);
      pushTimer = setTimeout(()=>this.push(), 1500);
    },

    async push(immediate){
      if(!this.enabled) return;
      try{
        const st = (typeof window.getCloudState==='function') ? window.getCloudState() : null;
        if(!st) return;
        const { error } = await client.from('game_state').upsert({
          user_id: user.id, state: st, state_version: st.v||4, updated_at: new Date(localTs()||Date.now()).toISOString()
        }, { onConflict:'user_id' });
        if(error) console.warn('[cloud] push', error);
      }catch(e){ console.warn('[cloud] push ex', e); }
    }
  };

  window.Cloud = Cloud;
})();
