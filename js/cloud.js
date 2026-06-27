/* =====================================================================
   Lila — synchronizacja w chmurze (Supabase), offline-first.
   - localStorage pozostaje źródłem prawdy; apka działa bez sieci.
   - Jeśli skonfigurowano (window.LILA_CLOUD) i jest sieć → przy każdym
     zapisie wypycha cały `state` do tabeli game_state (debounce).
   - Przy starcie pobiera zdalny stan; nowszy (wg czasu) wygrywa.
   - Bez konfiguracji albo bez biblioteki supabase = ciche no-op.
   Wymaga w index.html (przed app.js):
     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
     <script src="js/cloud-config.js"></script>
   ===================================================================== */
(function(){
  const TS_KEY = 'lila.stateTs';      // znacznik czasu ostatniej lokalnej zmiany
  const cfg = (typeof window!=='undefined' && window.LILA_CLOUD) || null;
  let client = null, user = null, ready = false, pushTimer = null;

  function localTs(){ return +(localStorage.getItem(TS_KEY)||0); }
  function markLocal(){ localStorage.setItem(TS_KEY, String(Date.now())); }

  const Cloud = {
    enabled:false, status:'off',

    async init(){
      if(!cfg || !cfg.url || !cfg.anonKey){ this.status='no-config'; return; }
      if(typeof window.supabase==='undefined'){ this.status='no-lib'; return; }
      try{
        client = window.supabase.createClient(cfg.url, cfg.anonKey, {
          auth:{ persistSession:true, autoRefreshToken:true, storageKey:'lila.auth' }
        });
        // sesja anonimowa (stała na urządzeniu dzięki persistSession)
        let { data:{ session } } = await client.auth.getSession();
        if(!session){
          const { data, error } = await client.auth.signInAnonymously();
          if(error){ this.status='auth-fail'; return; }
          session = data.session;
        }
        user = session.user;
        this.enabled = true; this.status='on';
        await this.pull();
      }catch(e){ this.status='error'; console.warn('[cloud] init', e); }
    },

    // pobierz zdalny stan; jeśli nowszy niż lokalny → przyjmij i przerysuj
    async pull(){
      if(!this.enabled) return;
      try{
        const { data, error } = await client
          .from('game_state').select('state,updated_at').eq('user_id', user.id).maybeSingle();
        if(error){ console.warn('[cloud] pull', error); return; }
        if(!data){ await this.push(true); return; }   // brak zdalnego → wypchnij lokalny
        const remoteTs = Date.parse(data.updated_at)||0;
        if(remoteTs > localTs() && data.state && typeof data.state==='object'){
          // zdalny nowszy — przyjmij
          if(typeof window.adoptCloudState==='function') window.adoptCloudState(data.state);
        }else{
          await this.push(true);                       // lokalny nowszy/równy — wypchnij
        }
      }catch(e){ console.warn('[cloud] pull ex', e); }
    },

    // zapis lokalny zaszedł → zaplanuj wypchnięcie (debounce)
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
