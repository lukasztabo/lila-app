'use strict';

/* ===== icons ===== */
const ICONS = {
  walk:'<circle cx="13" cy="5" r="2" fill="currentColor" stroke="none"/><path d="M13 8l-2 4 3 2 1 5M11 12l-3 1-1.5 4M14 14l3 1"/>',
  droplet:'<path d="M12 3c4 5 6 7 6 10a6 6 0 0 1-12 0c0-3 2-5 6-10z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.4 1.4M16.9 16.9l1.6 1.6M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6"/>',
  leaf:'<path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z"/><path d="M6.5 17.5c2.5-3 5.5-5 8.5-6"/>',
  moon:'<path d="M18 14a7 7 0 0 1-9-9 7 7 0 1 0 9 9z"/>',
  barbell:'<path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10"/>',
  heart:'<path d="M12 20s-7-4.5-7-10a3.6 3.6 0 0 1 7-1.6A3.6 3.6 0 0 1 19 10c0 5.5-7 10-7 10z" fill="currentColor" stroke="none"/>',
  sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor" stroke="none"/>',
  flame:'<path d="M12 3c1 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1.6.7-2.7 1.7-3.5C9.9 8 11 6 12 3z" fill="currentColor" stroke="none"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
  home:'<path d="M4 11l8-6 8 6M6 10v9h12v-9"/>',
  gift:'<path d="M5 11h14v8H5zM4 7h16v4H4zM12 7v12M12 7c-1.6-3-5.6-1.4-4 .3M12 7c1.6-3 5.6-1.4 4 .3"/>',
  star:'<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9z" fill="currentColor" stroke="none"/>',
  pencil:'<path d="M4 20l1-4 11-11 3 3-11 11z"/>',
  trophy:'<path d="M7 4h10v3a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9.5 14h5l-1 3h-3zM8 20h8"/>',
  lock:'<path d="M6 11h12v8H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/>',
  bolt:'<path d="M13 3L5 13h5l-1 8 9-11h-6z" fill="currentColor" stroke="none"/>',
  apple:'<path d="M12 8c-1.4-1.8-4-2.3-5.6-.6C4.6 9.2 5.1 13 7 15.4c1.3 1.6 2.6 2.1 4.4 1.1M12 8c1.4-1.8 4-2.3 5.6-.6C19.4 9.2 18.9 13 17 15.4c-1.3 1.6-2.6 2.1-4.4 1.1M12 8c.2-1.7 1.3-2.8 3-2.9"/>',
  shoe:'<path d="M4 16c0-2 .8-3 .8-5l3 1 2 2 6 1c2 .3 4 1 4 3v2H4z"/><path d="M6 14l2 1M9 13l2 1M12 14l2 1"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  book:'<path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 0-2 2zM18 6h1v14M9 8h6M9 11h6"/>',
  sprout:'<path d="M12 20v-7M12 13c-4 0-6-4-5-7 3 0 5 3 5 7M12 11c4 0 6-4 5-7-3 0-5 3-5 7"/>',
  paw:'<circle cx="7" cy="10" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.7" fill="currentColor" stroke="none"/><circle cx="17" cy="10" r="1.7" fill="currentColor" stroke="none"/><path d="M12 12c-3 0-5 2-5 4.5C7 19 9.5 19 12 19s5 0 5-2.5C17 14 15 12 12 12z" fill="currentColor" stroke="none"/>',
  sparkles2:'<path d="M5 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1zM16 9l1.4 4 4 1.4-4 1.4L16 20l-1.4-4-4-1.4 4-1.4z" fill="currentColor" stroke="none"/>'
};
const icon=(n,extra='')=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[n]||''}</svg>`;
const TINT={pink:{bg:'#FCE7EF',fg:'#D9608A'},lav:{bg:'#EEE7FA',fg:'#7E63C4'},mint:{bg:'#E3F5EC',fg:'#2F9B72'},amber:{bg:'#FCEFD6',fg:'#C77E12'},blue:{bg:'#E4F1FB',fg:'#2E78B8'},green:{bg:'#EAF4DD',fg:'#5B8C24'}};

/* ===== nawyki ===== */
const PRESET_HABITS=[
  {id:'walk',name:'Spacer po posiłku',sub:'Mały spacerek po jedzeniu',icon:'walk',color:'mint',sparks:12,repeatable:true,active:true,builtin:true},
  {id:'sweets',name:'Słodko-mądry dzień',sub:'Dzień bez słodyczy',icon:'apple',color:'pink',sparks:12,repeatable:false,active:true,builtin:true},
  {id:'veg',name:'Tęczowy talerz',sub:'Dodaj warzywa lub owoce',icon:'leaf',color:'green',sparks:10,repeatable:true,active:true,builtin:true},
  {id:'breakfast',name:'Poranna moc',sub:'Śniadanie z białkiem',icon:'sun',color:'amber',sparks:10,repeatable:false,active:true,builtin:true},
  {id:'energy',name:'Energia',sub:'Rusz się i baw się dobrze',icon:'bolt',color:'lav',sparks:12,repeatable:false,active:true,builtin:true},
  {id:'order',name:'Warzywa na start',sub:'Warzywa i białko przed resztą',icon:'leaf',color:'green',sparks:8,repeatable:false,active:true,builtin:true},
  {id:'strength',name:'Iskra siły',sub:'5-minutowy mini trening',icon:'barbell',color:'pink',sparks:10,repeatable:false,active:true,builtin:true},
  {id:'steps',name:'Kroki',sub:'Cel kroków z zegarka osiągnięty',icon:'shoe',color:'mint',sparks:12,repeatable:false,active:true,builtin:true},
  {id:'water',name:'Plusk',sub:'Wybierz wodę',icon:'droplet',color:'blue',sparks:8,repeatable:true,active:false,builtin:true},
  {id:'sleep',name:'Spokojna noc',sub:'Sen o czasie',icon:'moon',color:'lav',sparks:10,repeatable:false,active:false,builtin:true},
  {id:'calm',name:'Chwila spokoju',sub:'2 minuty oddechu',icon:'heart',color:'pink',sparks:8,repeatable:false,active:false,builtin:true}
];

/* ===== katalog świata ===== */
const THEMES=[
  {id:'cream',name:'Kremowy',cost:0,wall:'linear-gradient(180deg,#FBEAF1,#F4E9FA)',floor:'#EAD7CB'},
  {id:'mint',name:'Miętowy',cost:60,wall:'linear-gradient(180deg,#E6F6EE,#D8F0E6)',floor:'#C2E6D4'},
  {id:'lavender',name:'Lawendowy',cost:60,wall:'linear-gradient(180deg,#EFE8FB,#E7DEF8)',floor:'#D8CAF1'},
  {id:'sky',name:'Niebieski',cost:120,wall:'linear-gradient(180deg,#E6F1FB,#DCEBF7)',floor:'#CFE6F5'},
  {id:'sunset',name:'Zachód słońca',cost:200,wall:'linear-gradient(180deg,#FDE8D8,#FBD7E3)',floor:'#F3C9B0'},
  {id:'starry',name:'Gwiaździsta noc',cost:300,wall:'linear-gradient(180deg,#4a4478,#6a5da0)',floor:'#39335c'}
];
const DECOR=[
  {id:'rug',name:'Przytulny dywanik',cost:40,set:'home',pos:'left:50%;bottom:5%;transform:translateX(-50%);width:64%;z-index:2',svg:'<svg viewBox="0 0 200 56" width="100%"><ellipse cx="100" cy="30" rx="96" ry="24" fill="#F2C2D6"/><ellipse cx="100" cy="30" rx="70" ry="16" fill="#FBE3EC"/><ellipse cx="100" cy="30" rx="44" ry="9" fill="#F7CFDE"/></svg>'},
  {id:'plant',name:'Zielona roślinka',cost:70,set:'home',pos:'left:5%;bottom:30%;width:20%;z-index:3',svg:'<svg viewBox="0 0 60 96" width="100%"><path d="M30 56C14 50 12 30 16 16c10 4 16 22 14 40z" fill="#8FD7BC"/><path d="M30 56C46 48 50 28 46 14c-12 4-18 24-16 42z" fill="#A6E0C9"/><path d="M30 60c-2-16 0-30 0-30s2 14 0 30z" fill="#5FB894"/><path d="M20 60h20l-3 30H23z" fill="#E7A6BE"/></svg>'},
  {id:'cushion',name:'Poduszka',cost:35,set:'home',pos:'right:10%;bottom:8%;width:22%;z-index:4',svg:'<svg viewBox="0 0 70 52" width="100%"><rect x="4" y="10" width="62" height="36" rx="14" fill="#C7B4EC"/><rect x="4" y="10" width="62" height="36" rx="14" fill="none" stroke="#A98EE0" stroke-width="2"/><circle cx="35" cy="28" r="4" fill="#A98EE0"/></svg>'},
  {id:'lamp',name:'Ciepła lampa',cost:90,set:'home',pos:'right:4%;bottom:30%;width:18%;z-index:3',svg:'<svg viewBox="0 0 50 110" width="100%"><path d="M10 40h30l-6-22H16z" fill="#F6D27A"/><rect x="23" y="40" width="4" height="56" fill="#C9A98A"/><ellipse cx="25" cy="100" rx="16" ry="6" fill="#C9A98A"/></svg>'},
  {id:'frame',name:'Ramka na zdjęcie',cost:60,set:'home',pos:'left:9%;top:14%;width:18%;z-index:3',svg:'<svg viewBox="0 0 60 54" width="100%"><rect x="4" y="4" width="52" height="42" rx="6" fill="#fff" stroke="#E7C9B0" stroke-width="3"/><circle cx="30" cy="22" r="8" fill="#F2C2D6"/><path d="M14 40c4-9 12-9 16 0M30 40c3-6 9-6 12 0" fill="#9FD9BE"/></svg>'},
  {id:'flowers',name:'Wazon z kwiatami',cost:50,set:'home',pos:'left:32%;bottom:7%;width:13%;z-index:4',svg:'<svg viewBox="0 0 44 70" width="100%"><circle cx="14" cy="16" r="7" fill="#F2A0BC"/><circle cx="30" cy="13" r="7" fill="#C7B4EC"/><circle cx="22" cy="22" r="7" fill="#F6D27A"/><path d="M22 26v18" stroke="#7FBE9C" fill="none" stroke-width="2"/><path d="M12 44h20l-3 22H15z" fill="#9FD0E8"/></svg>'}
];
const TREATS=[
  {id:'cupcake',name:'Babeczka',cost:25,set:'treats',svg:'<svg viewBox="0 0 40 50" width="100%"><path d="M8 22h24l-3 24H11z" fill="#F4D9A6"/><path d="M8 23c0-7 5-12 12-12s12 5 12 12z" fill="#F7B6CE"/><circle cx="20" cy="9" r="3" fill="#E2607F"/></svg>'},
  {id:'smoothie',name:'Owocowe smoothie',cost:22,set:'treats',svg:'<svg viewBox="0 0 30 52" width="100%"><path d="M7 15h16l-2 32H9z" fill="#F2A0BC"/><rect x="6" y="11" width="18" height="5" rx="2" fill="#fff"/><rect x="18" y="2" width="3" height="13" fill="#9FD9BE"/><circle cx="13" cy="9" r="2.2" fill="#fff"/></svg>'},
  {id:'icecream',name:'Lody',cost:28,set:'treats',svg:'<svg viewBox="0 0 28 56" width="100%"><path d="M9 26l5 28 5-28z" fill="#F4D9A6"/><circle cx="14" cy="18" r="9" fill="#C7B4EC"/><circle cx="14" cy="11" r="7" fill="#F7B6CE"/></svg>'},
  {id:'fruitbowl',name:'Miska owoców',cost:30,set:'treats',svg:'<svg viewBox="0 0 50 38" width="100%"><circle cx="16" cy="15" r="8" fill="#F2A0BC"/><circle cx="32" cy="13" r="8" fill="#9FD9BE"/><circle cx="25" cy="19" r="8" fill="#F6D27A"/><path d="M6 19h38l-4 15H10z" fill="#E7C9B0"/></svg>'},
  {id:'pretzel',name:'Miękki precel',cost:26,set:'treats',svg:'<svg viewBox="0 0 44 44" width="100%"><path d="M10 30c-6-6-2-16 6-16s14 8 8 14-14 6-18-2c-3-6 2-12 8-12" fill="none" stroke="#D9A05B" stroke-width="5" stroke-linecap="round"/></svg>'}
];
const SEEDS=[
  {id:'tulip',name:'Tulipan',cost:30,set:'garden',bloom:'<svg viewBox="0 0 40 50" width="100%"><path d="M10 50V24M20 50V20M30 50V24" stroke="#5FB894" stroke-width="3"/><path d="M10 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#F2A0BC"/><path d="M20 20c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#E2607F"/><path d="M30 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#C7B4EC"/></svg>'},
  {id:'sunflower',name:'Słonecznik',cost:35,set:'garden',bloom:'<svg viewBox="0 0 44 60" width="100%"><path d="M22 60V28" stroke="#5FB894" stroke-width="3"/>'+[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="22" cy="16" rx="4" ry="9" fill="#F6D27A" transform="rotate(${a} 22 16)"/>`).join('')+'<circle cx="22" cy="16" r="7" fill="#C77E12"/></svg>'},
  {id:'rose',name:'Róża',cost:40,set:'garden',bloom:'<svg viewBox="0 0 40 54" width="100%"><path d="M20 54V28" stroke="#5FB894" stroke-width="3"/><circle cx="20" cy="18" r="11" fill="#E2607F"/><circle cx="20" cy="18" r="6" fill="#F2A0BC"/><circle cx="20" cy="18" r="2.5" fill="#fff"/></svg>'}
];
const SETS={
  treats:{name:'Słodkie przysmaki',items:TREATS},
  home:{name:'Domowe akcenty',items:DECOR},
  garden:{name:'Kwiaty z ogrodu',items:SEEDS}
};
const BADGES=[
  {id:'first',name:'Pierwszy krok',icon:'paw',color:'pink',test:s=>s.lifetime>=1},
  {id:'s7',name:'Cały tydzień',icon:'flame',color:'amber',test:s=>s.streak.best>=7},
  {id:'sp100',name:'100 iskierek',icon:'sparkle',color:'lav',test:s=>s.lifetime>=100},
  {id:'lvl5',name:'Lila poz. 5',icon:'star',color:'pink',test:s=>levelInfo(s.lifetime).level>=5},
  {id:'s30',name:'Cały miesiąc',icon:'trophy',color:'amber',test:s=>s.streak.best>=30},
  {id:'green',name:'Zielony kciuk',icon:'sprout',color:'green',test:s=>s.gardenHarvested.length>=3},
  {id:'collector',name:'Kolekcjonerka',icon:'gift',color:'lav',test:s=>['treats','home','garden'].some(k=>setDone(k,s))}
];

const PERFECT_BONUS=15, SPA_COST=60, STREAK_HEART_MILES=[3,7,14,30,60,100];
const LILA_NOTES=['Uwielbiam spędzać z Tobą dzień 🤍','Sprawiasz, że jestem taka szczęśliwa!','Najlepsze przyjaciółki na zawsze?','Zawsze w Ciebie wierzę.','Dziś było z Tobą cudownie.','Dziękuję, że tu jesteś!'];

/* ===== daty ===== */
const pad=n=>String(n).padStart(2,'0');
const dstr=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today=()=>dstr(new Date());
function daysBetween(a,b){return Math.round((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/86400000);}
function shiftDay(ds,d){const x=new Date(ds+'T00:00:00');x.setDate(x.getDate()+d);return dstr(x);}
function relDay(ds){const n=daysBetween(ds,today());return n===0?'dzisiaj':n===1?'wczoraj':n+' dni temu';}

/* ===== stan ===== */
const KEY='lila.v1';
let state;
function freshState(){return{v:4,name:'przyjaciółko',createdAt:today(),sparks:0,lifetime:0,hearts:0,
  streak:{count:0,best:0,lastWin:null,freezes:1},
  habits:JSON.parse(JSON.stringify(PRESET_HABITS)),log:{},
  ownedThemes:['cream'],theme:'cream',inventory:[],
  treatsGiven:[],garden:[null,null,null],gardenHarvested:[],
  places:['home','cafe','park'],journal:[],townBeats:[],wokenPlaces:[],
  home:{owned:[],edit:false,sel:null,room:'wood',layout:{}},
  park:{edit:false,tool:null,sel:null,ownedTiles:['earth'],ownedProps:[],objects:{},nextUid:1,
    grid:[['earth','earth','earth','earth','earth'],['earth','earth','earth','earth','earth'],['earth','earth','earth','earth','earth'],['earth','earth','earth','earth','earth'],['earth','earth','earth','earth','earth']]},
  moodLog:[],gratitudeLog:[],calmLog:[],cafe:{lastCalm:null},
  tab:'today',location:'map'};}
function load(){
  try{const r=localStorage.getItem(KEY);state=r?JSON.parse(r):freshState();}catch(e){state=freshState();}
  const f=freshState();for(const k in f)if(state[k]===undefined)state[k]=f[k];
  PRESET_HABITS.forEach(p=>{const ex=state.habits.find(h=>h.id===p.id);if(!ex)state.habits.push(JSON.parse(JSON.stringify(p)));else{ex.name=p.name;ex.sub=p.sub;}});
  if(state.home&&!state.home.room)state.home.room='wood';
}
function save(){localStorage.setItem(KEY,JSON.stringify(state));if(window.Cloud)window.Cloud.onLocalSave();}
/* ===== mosty do chmury (Supabase) ===== */
window.getCloudState=function(){return state;};
window.adoptCloudState=function(remote){try{state=remote;const f=freshState();for(const k in f)if(state[k]===undefined)state[k]=f[k];localStorage.setItem(KEY,JSON.stringify(state));render();}catch(e){console.warn('adopt',e);}};

/* ===== pochodne ===== */
const activeHabits=()=>state.habits.filter(h=>h.active);
function getDay(d){if(!state.log[d])state.log[d]={counts:{},perfect:false,flags:{}};if(!state.log[d].flags)state.log[d].flags={};return state.log[d];}
const countFor=(d,id)=>(state.log[d]?.counts[id])||0;
const dailyGoal=()=>Math.min(3,Math.max(1,activeHabits().length));
/* Poziomy — progi to SKUMULOWANE zebrane iskierki (state.lifetime). */
const LEVELS=[0,120,300,550,850,1200,1650,2200,2900,3700];
(function(){let g=LEVELS[LEVELS.length-1]-LEVELS[LEVELS.length-2],v=LEVELS[LEVELS.length-1];for(let i=LEVELS.length;i<40;i++){g=Math.round(g*1.18);v+=g;LEVELS.push(v);}})();
function levelInfo(lt){let lvl=1;for(let i=1;i<LEVELS.length;i++){if(lt>=LEVELS[i])lvl=i+1;else break;}const base=LEVELS[lvl-1],nextAt=LEVELS[lvl]!=null?LEVELS[lvl]:base,span=Math.max(1,nextAt-base);return{level:lvl,base,nextAt,toNext:Math.max(0,nextAt-lt),pct:Math.min(100,Math.round((lt-base)/span*100))};}
const PLACE_LEVEL={home:1,cafe:2,park:3,spa:4};
const PLACE_NAME={home:'Dom',park:'Park',cafe:'Kawiarnia',spa:'Spa Lili'};
function placeLocked(id){return levelInfo(state.lifetime).level<(PLACE_LEVEL[id]||1);}
function displayStreak(){const s=state.streak;if(!s.lastWin)return 0;const g=daysBetween(s.lastWin,today());if(g<=1)return s.count;if(g-1<=s.freezes)return s.count;return 0;}
function setOwned(key){return{treats:state.treatsGiven,home:state.inventory,garden:state.gardenHarvested}[key]||[];}
function setDone(key,s){const owned={treats:s.treatsGiven,home:s.inventory,garden:s.gardenHarvested}[key]||[];return owned.length>=SETS[key].items.length;}

/* ===== nagrody ===== */
function addSparks(n){const b=levelInfo(state.lifetime).level;state.sparks+=n;state.lifetime+=n;const a=levelInfo(state.lifetime).level;if(a>b)onLevelUp(b,a);}
function onLevelUp(from,to){for(let L=from+1;L<=to;L++){addMemory('star',`Lila osiągnęła poziom ${L}!`);const un=Object.keys(PLACE_LEVEL).filter(id=>PLACE_LEVEL[id]===L);const d=(L-from-1)*1700;setTimeout(()=>{toast(`✨ Poziom ${L}!`,'star');confetti();},600+d);un.forEach(id=>{addMemory('sparkles2',`${PLACE_NAME[id]} otwiera się!`);setTimeout(()=>{toast(`${PLACE_NAME[id]} otwiera się — możesz tam teraz wejść!`,'sparkles2');confetti();},1400+d);});}}
function addHearts(n){}
function addMemory(ic,text){state.journal.unshift({ic,text,date:today()});if(state.journal.length>80)state.journal.pop();}

function registerWin(d){const s=state.streak;if(s.lastWin===d)return;if(!s.lastWin)s.count=1;else{const g=daysBetween(s.lastWin,d);if(g===1)s.count++;else if(g>1){const m=g-1;if(s.freezes>=m){s.freezes-=m;s.count++;toast('Lila uratowała Twoją serię','flame');}else s.count=1;}}s.lastWin=d;const wasBest=s.best;s.count>s.best&&(s.best=s.count);if(s.best>wasBest&&STREAK_HEART_MILES.includes(s.best)){addHearts(2);addMemory('flame',`Seria ${s.best} dni!`);setTimeout(()=>toast(`Seria ${s.best} dni!`,'flame'),900);}if(s.count>0&&s.count%5===0)s.freezes=Math.min(3,s.freezes+1);}
function recompute(){const t=today(),day=getDay(t),act=activeHabits();const done=act.filter(h=>countFor(t,h.id)>=1).length;if(done>=dailyGoal()&&state.streak.lastWin!==t)registerWin(t);if(act.length>0&&done===act.length&&!day.perfect){day.perfect=true;addSparks(PERFECT_BONUS);addMemory('sparkle','Idealny dzień — wszystkie nawyki zrobione!');setTimeout(()=>{toast(`Idealny dzień! +${PERFECT_BONUS} iskierek`,'sparkle');confetti();},250);}save();}
function tapHabit(h){const t=today(),day=getDay(t),cur=countFor(t,h.id);if(h.repeatable){if(cur>=6)return;day.counts[h.id]=cur+1;addSparks(h.sparks);}else{if(cur>=1){day.counts[h.id]=0;state.sparks=Math.max(0,state.sparks-h.sparks);state.lifetime=Math.max(0,state.lifetime-h.sparks);}else{day.counts[h.id]=1;addSparks(h.sparks);if(state.journal.length===0)addMemory('paw','Twój pierwszy nawyk z Lilą 🐾');}}buzz();celebratePop();maybeCelebrateVideo();recompute();render();}
function decHabit(h){const t=today(),day=getDay(t),cur=countFor(t,h.id);if(cur<=0)return;day.counts[h.id]=cur-1;state.sparks=Math.max(0,state.sparks-h.sparks);state.lifetime=Math.max(0,state.lifetime-h.sparks);save();render();}

/* ===== kupowanie ===== */
function spend(c){if(state.sparks<c){toast('Działaj dalej — już prawie!','sparkle');return false;}state.sparks-=c;return true;}
function checkSet(key){if(setDone(key,state)){addHearts(3);addMemory('trophy',`Ukończona kolekcja: ${SETS[key].name}!`);setTimeout(()=>{toast(`Kolekcja „${SETS[key].name}" ukończona!`,'trophy');confetti();},500);}}
function buyTheme(id){if(state.ownedThemes.includes(id)){state.theme=id;save();render();return;}const t=THEMES.find(x=>x.id===id);if(!spend(t.cost))return;state.ownedThemes.push(id);state.theme=id;toast(`Pokój ${t.name.toLowerCase()} odblokowany!`,'gift');confetti();save();render();}
function buyHome(id){if(state.inventory.includes(id))return;const it=DECOR.find(d=>d.id===id);if(!spend(it.cost))return;state.inventory.push(id);addMemory('home',`Do domu Lili trafił: ${it.name.toLowerCase()}`);toast(`Dodano: ${it.name.toLowerCase()}!`,'gift');confetti();checkSet('home');save();render();}
function giveTreat(it){if(!spend(it.cost))return;const firstTime=!state.treatsGiven.includes(it.id);if(firstTime){state.treatsGiven.push(it.id);addMemory('gift',`Podzieliłaś się z Lilą: ${it.name.toLowerCase()}`);checkSet('treats');}toast(`Lila uwielbia ${it.name.toLowerCase()}! 🤍`,'heart');confetti();save();render();}
function unlockPlace(id,cost){if(!spend(cost))return;state.places.push(id);addMemory('sparkles2','Spa Lili odblokowane w mieście!');toast('Spa Lili odblokowane!','sparkles2');confetti();state.location=id;save();render();}

/* ===== ogród ===== */
function plotStage(p){if(!p)return -1;const age=daysBetween(p.planted,today());return age<=0?0:age===1?1:age===2?2:3;}
function plantSeed(idx,seedId){const s=SEEDS.find(x=>x.id===seedId);if(!spend(s.cost))return;state.garden[idx]={seed:seedId,planted:today(),watered:today()};addMemory('sprout',`Zasadzono w ogrodzie: ${s.name.toLowerCase()}`);toast(`${s.name} zasadzony! Wracaj codziennie, by patrzeć, jak rośnie`,'sprout');closeSheet();save();render();}
function water(idx){const p=state.garden[idx];if(!p)return;if(p.watered===today()){toast('Już podlane dzisiaj 🤍','droplet');return;}p.watered=today();addSparks(2);buzz();toast('Podlane! +2 iskierki','droplet');save();render();}
function harvest(idx){const p=state.garden[idx];if(plotStage(p)<3)return;const s=SEEDS.find(x=>x.id===p.seed);addHearts(2);if(!state.gardenHarvested.includes(p.seed)){state.gardenHarvested.push(p.seed);addMemory('sprout',`Twój ${s.name.toLowerCase()} zakwitł!`);checkSet('garden');}else addMemory('sprout',`Zebrano: ${s.name.toLowerCase()}`);state.garden[idx]=null;toast(`${s.name} zakwitł!`,'heart');confetti();save();render();}

/* ===== reakcje ===== */
function buzz(){try{navigator.vibrate&&navigator.vibrate(14);}catch(e){}}
let toastT;function toast(m,ic){const el=document.getElementById('toast');el.innerHTML=icon(ic||'sparkle')+`<span>${m}</span>`;el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('show'),2300);}
function maybeCelebrateVideo(){
  if(Math.random()>1.0)return;
  const ov=document.getElementById('celebrate-overlay');
  const vid=document.getElementById('celebrate-video');
  if(!ov||!vid)return;
  vid.currentTime=0;
  vid.play().catch(()=>{});
  ov.classList.add('show');
  vid.onended=()=>hideCelebrateVideo();
}
function hideCelebrateVideo(){
  const ov=document.getElementById('celebrate-overlay');
  const vid=document.getElementById('celebrate-video');
  if(!ov)return;
  ov.classList.remove('show');
  if(vid){vid.pause();vid.currentTime=0;}
}
function celebratePop(){const st=document.querySelector('.lila-stage,.care-stage');if(!st)return;const img=st.querySelector('img.lila');if(!img)return;const was=img.getAttribute('src');img.src='assets/lila/celebrate.png';st.classList.add('pop');setTimeout(()=>{st.classList.remove('pop');if(!isPerfectToday())img.src=was;},1100);}
function isPerfectToday(){const a=activeHabits();return a.length>0&&a.every(h=>countFor(today(),h.id)>=1);}
function confetti(){const c=['#F2A0BC','#C7B4EC','#8FD7BC','#F6D27A','#FBA7C6'];for(let i=0;i<26;i++){const d=document.createElement('div');d.className='confetti';d.style.background=c[i%c.length];d.style.left=(10+Math.random()*80)+'%';d.style.top='-20px';document.body.appendChild(d);d.animate([{transform:'translateY(0) rotate(0)',opacity:1},{transform:`translateY(${innerHeight+40}px) rotate(${360+Math.random()*360}deg)`,opacity:.9}],{duration:1400+Math.random()*900,easing:'cubic-bezier(.3,.6,.5,1)'}).onfinish=()=>d.remove();}}

/* ===== figurka Lili ===== */
function lilaFig(pose,height){return`<div class="lilawrap" style="height:${height}px"><img class="lila" src="assets/lila/${pose}.png" alt="Lila" style="height:${height}px"></div>`;}

/* ===== render ===== */
const app=()=>document.getElementById('app');
function render(){const v={today:viewToday,world:viewWorld,journey:viewJourney,habits:viewHabits}[state.tab]||viewToday;app().innerHTML=v();document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.id===state.tab));initHomeScreen();initParkScreen();}
function header(){return`<div class="topbar">
    <div class="greet"><div class="hi">Cześć</div><div class="nm">${esc(state.name)}</div></div>
    <div class="chips"><div class="chip flame">${icon('flame')}${displayStreak()}</div><div class="chip spark">${icon('sparkle')}${state.sparks}</div></div></div>`;}

/* ----- Dzisiaj ----- */
function levelBar(){const li=levelInfo(state.lifetime);
  const nextUnlock=Object.keys(PLACE_LEVEL).filter(id=>PLACE_LEVEL[id]===li.level+1).map(id=>PLACE_NAME[id])[0];
  const nextTxt=li.toNext>0?`jeszcze ${li.toNext} ✦ do poziomu ${li.level+1}${nextUnlock?` — otworzy się ${nextUnlock}`:''}`:'najwyższy poziom 🎉';
  return`<div class="blask"><div class="blask-top"><b>${icon('star')} Poziom ${li.level}</b><span>${li.pct}%</span></div><div class="wb"><i style="width:${li.pct}%"></i></div>
    <small>${nextTxt}</small>
    <div class="lvl-nums"><span>Zebrane łącznie: <b>${state.lifetime} ✦</b></span><span>Do wydania: <b>${state.sparks} ✦</b></span></div></div>`;}
function viewToday(){const li=levelInfo(state.lifetime),act=activeHabits();
  const done=act.filter(h=>countFor(today(),h.id)>=1).length;
  const perfect=isPerfectToday(),pose=perfect?'celebrate':'hero';
  const note=LILA_NOTES[(li.level+new Date().getDay())%LILA_NOTES.length];
  const rows=act.map(h=>{const c=countFor(today(),h.id),t=TINT[h.color]||TINT.pink,isDone=c>=1;
    const right=h.repeatable?`<div class="rep"><button data-act="dec" data-id="${h.id}" ${c<=0?'style="opacity:.35"':''}>−</button><span class="cnt">×${c}</span><button data-act="tap" data-id="${h.id}">+</button></div>`:`<div class="check">${icon('check')}</div>`;
    return`<div class="habit ${isDone?'done':''}" ${h.repeatable?'':`data-act="tap" data-id="${h.id}"`}><div class="ic" style="background:${t.bg};color:${t.fg}">${icon(h.icon)}</div><div class="tx"><b>${esc(h.name)}</b><span>${esc(h.sub)}</span></div><div class="val">${icon('sparkle')}${h.sparks}</div>${right}</div>`;}).join('');
  const banner=perfect?`<div class="banner perfect">${icon('sparkle')}<div>Idealny dzień — wszystko zrobione!<small>Lila jest z Ciebie taka dumna</small></div></div>`:'';
  return header()+`
    <div class="lila-card">
      <div class="speech">${esc(note)}</div>
      <div class="lila-stage">${lilaFig(pose,196)}</div>
      <div class="lila-name"><b>Lila</b><span class="lvl">Poziom ${li.level}</span><div class="xpbar"><i style="width:${li.pct}%"></i></div></div>
    </div>
    ${levelBar()}
    <div class="sec"><h2>Dzisiaj</h2><span class="meta">${done} z ${act.length} zrobione</span></div>
    <div class="habits">${rows||emptyHabits()}</div>
    <div class="sec"><h2>Chwila dla siebie</h2></div>
    <div class="rituals" style="padding-top:2px">${todayRitual()}</div>
    ${banner}`;}
function todayRitual(){
  const woken=(typeof placeLocked==='function')&&!placeLocked('cafe');
  const teaDone=state.cafe&&state.cafe.lastCalm===today();
  if(!woken)return`<div class="ritual locked"><div class="r-ic">🫖</div><div class="r-tx"><b>Herbatka z Olive</b><span>Otworzy się na poziomie ${PLACE_LEVEL.cafe}</span></div><span class="r-go">${icon('lock','style="width:16px;height:16px"')}</span></div>`;
  return`<button class="ritual ${teaDone?'done':''}" data-act="cafe-go"><div class="r-ic">🫖</div><div class="r-tx"><b>Herbatka z Olive</b><span>${teaDone?'Byłaś dziś 🤍 — możesz wpaść znowu':'Chwila spokoju — usiądź z Olive w kawiarni'}</span></div><span class="r-go">${teaDone?icon('check','style="width:18px;height:18px;color:#2F9B72"'):icon('back','style="transform:rotate(180deg);width:16px;height:16px"')}</span></button>`;
}
function emptyHabits(){return`<div class="banner next" style="margin:8px 0">${icon('heart')}<div>Nie masz jeszcze nawyków<small>Kliknij „Nawyki" na dole, aby wybrać</small></div></div>`;}

/* ----- Świat ----- */
function viewWorld(){switch(state.location){case'home':return worldHome();case'furniture':return furnitureScreen();case'cafe':return cafeScreen();case'park':return worldPark();case'spa':return spaScreen();default:return worldMap();}}
function spot(id,label,style){const locked=placeLocked(id),lv=PLACE_LEVEL[id]||1;return`<button class="spot ${locked?'locked':''}" data-act="goto" data-id="${id}" style="${style}"><span>${locked?icon('lock')+' poz. '+lv:label}</span></button>`;}
function worldMap(){const li=levelInfo(state.lifetime),spaOpen=!placeLocked('spa');
  const nextUnlock=Object.keys(PLACE_LEVEL).filter(id=>PLACE_LEVEL[id]===li.level+1).map(id=>PLACE_NAME[id])[0];
  return header()+`<div class="sec"><h2>Miasteczko Lili</h2><span class="meta">dotknij miejsca, by wejść</span></div>
    <div class="worldwrap"><div class="worldmap">
      <img class="town-map" src="assets/lila/world.png" alt="Miasteczko Lili">
      ${spot('home','Dom','left:36%;top:18%;width:30%;height:34%')}
      ${spot('cafe','Kawiarnia','left:60%;top:36%;width:31%;height:26%')}
      ${spot('park','Park','left:10%;top:60%;width:35%;height:24%')}
    </div>
    <div class="chapter"><div class="ch-top"><b>${icon('star')} Poziom ${li.level}</b><span>${li.toNext>0?`jeszcze ${li.toNext} ✦`:'max'}</span></div>
      <div class="wb"><i style="width:${li.pct}%"></i></div>
      <div class="ch-next">${icon('star')} ${nextUnlock?`Na poziomie ${li.level+1} otworzy się <b>${nextUnlock}</b>`:`Zbierasz do poziomu ${li.level+1}`}</div>
    </div></div>
    <div class="newplace ${spaOpen?'done':''}" data-act="goto" data-id="spa">
      <div class="np-ic">${icon(spaOpen?'sparkles2':'lock')}</div>
      <div class="np-tx"><b>Spa Lili</b><small>${spaOpen?'Otwarte — wpadnij na dzień relaksu':`Odblokuje się na poziomie ${PLACE_LEVEL.spa}`}</small></div>
      <div class="np-cost">${spaOpen?icon('back','style="transform:rotate(180deg)"'):icon('star')+' '+PLACE_LEVEL.spa}</div>
    </div>
    <div class="hintline">${icon('sparkle')} <b>${state.sparks}</b> iskierek do wydania</div>`;}
function locHeader(title){return`<div class="locbar"><button class="back" data-act="backmap">${icon('back')} Miasto</button><div class="chips"><div class="chip spark">${icon('sparkle')}${state.sparks}</div></div></div><div class="sec"><h2>${title}</h2></div>`;}
function setBar(key){const owned=setOwned(key).length,total=SETS[key].items.length;return`<div class="setbar"><span>${SETS[key].name}</span><div class="sb"><i style="width:${Math.round(owned/total*100)}%"></i></div><b>${owned}/${total}</b></div>`;}
function furnitureScreen(){const themes=THEMES.map(t=>{const owned=state.ownedThemes.includes(t.id),active=state.theme===t.id;return`<div class="shopcard"><div class="pre"><div class="swatch" style="background:${t.wall}"></div></div><b>${t.name}</b><button class="buy ${owned?'owned':(state.sparks<t.cost?'cant':'')}" data-act="buytheme" data-id="${t.id}">${active?'Wybrany':owned?'Wybierz':icon('sparkle')+' '+t.cost}</button></div>`;}).join('');
  const furn=DECOR.map(d=>{const owned=state.inventory.includes(d.id);return`<div class="shopcard"><div class="pre">${d.svg.replace('width="100%"','width="62"')}</div><b>${esc(d.name)}</b><button class="buy ${owned?'owned':(state.sparks<d.cost?'cant':'')}" data-act="buyhome" data-id="${d.id}">${owned?'Posiadane':icon('sparkle')+' '+d.cost}</button></div>`;}).join('');
  return locHeader('Sklep z meblami')+setBar('home')+`<div class="subsec">Motywy pokoju</div><div class="shop">${themes}</div><div class="subsec">Meble</div><div class="shop">${furn}</div><div style="height:8px"></div>`;}
/* ===== Kawiarnia Olive — hub dobrostanu ===== */
const OLIVE_LINES=['Tak miło, że wpadłaś 🤍','Usiądź, odpocznijmy chwilę.','Zrobiłam świeżą herbatę.','Dziś, jak zawsze, jesteś tu mile widziana.','Razem zawsze raźniej.','Dobrze Cię widzieć 🌿'];
const RITUALS=[
  {ic:'🫖',name:'Herbatka z Olive',sub:'Spokojny oddech · 3 min',act:'cafe-tea'},
  {ic:'🌿',name:'Chwila wdzięczności',sub:'Co dziś było miłe?',act:'cafe-gratitude'},
  {ic:'💬',name:'Jak się czujesz?',sub:'Powiedz Olive',act:'cafe-mood'},
  {ic:'🍃',name:'Szybki oddech',sub:'1 minuta na już',act:'cafe-quick'},
];
const RECIPES=[
  {ic:'🍓',name:'Truskawkowe smoothie',line:'Różowe, z ogrodowych truskawek.'},
  {ic:'🌸',name:'Kwiatowa herbatka',line:'Pachnie jak wiosenny ogród.'},
  {ic:'🫐',name:'Borówkowy chłodnik',line:'Chłodny i kojący.'},
  {ic:'🍋',name:'Miętowa lemoniada',line:'Orzeźwia po spacerze.'},
];
function dayIndex(){const d=new Date();return Math.floor((d-new Date(d.getFullYear(),0,0))/86400000);}
function todayRecipe(){const i=dayIndex();return i%3===0?RECIPES[i%RECIPES.length]:null;}
function cafeScreen(){
  const greet=OLIVE_LINES[(new Date().getDay()+state.journal.length)%OLIVE_LINES.length];
  const cards=RITUALS.map(r=>`<button class="ritual" data-act="${r.act}"><div class="r-ic">${r.ic}</div><div class="r-tx"><b>${r.name}</b><span>${r.sub}</span></div><span class="r-go">${icon('back','style="transform:rotate(180deg);width:16px;height:16px"')}</span></button>`).join('');
  const rc=todayRecipe();
  const recipe=rc?`<button class="ritual recipe" data-act="cafe-recipe"><div class="r-ic">${rc.ic}</div><div class="r-tx"><b>Przepis dnia: ${rc.name}</b><span>Olive ma dziś coś specjalnego</span></div><span class="r-go">${icon('sparkles2','style="width:16px;height:16px"')}</span></button>`:'';
  return locHeader('Kawiarnia Olive')+`
    <div class="cafe-hero"><img src="assets/cafe/interior.png" alt="Kawiarnia"><div class="cafe-olive"><img src="assets/cafe/olive.png" alt="Olive"></div></div>
    <div class="speech cafe-speech">${esc(greet)}</div>
    <p class="note" style="text-align:center;margin:6px 16px">Miejsce na spokój i bycie razem — wracaj, kiedy chcesz.</p>
    <div class="rituals">${cards}${recipe}</div><div style="height:10px"></div>`;
}
/* — oddech — */
let breathT=null,breathDur=0;
function startBreath(durSec){
  breathDur=durSec;
  const ov=document.getElementById('breath-overlay');if(!ov)return;
  const label=ov.querySelector('.breath-label'),prog=ov.querySelector('.breath-prog-i'),circle=ov.querySelector('.breath-circle');
  ov.classList.add('show');
  circle.style.animation='none';void circle.offsetWidth;circle.style.animation='breathe 12s ease-in-out infinite';
  prog.style.transition='none';prog.style.width='0%';void prog.offsetWidth;prog.style.transition=`width ${durSec}s linear`;prog.style.width='100%';
  const PH=[['Wdech',4000],['Zatrzymaj',2000],['Wydech',6000]];let pi=0;
  clearTimeout(breathT);
  (function phase(){label.textContent=PH[pi][0];if(pi===0||pi===2)buzz();const d=PH[pi][1];pi=(pi+1)%3;breathT=setTimeout(phase,d);})();
  clearTimeout(window._breathEnd);window._breathEnd=setTimeout(()=>finishBreath(),durSec*1000);
}
function clearBreath(){clearTimeout(breathT);clearTimeout(window._breathEnd);const ov=document.getElementById('breath-overlay');if(ov)ov.classList.remove('show');}
function stopBreath(){clearBreath();}
function finishBreath(){clearBreath();state.calmLog.unshift({date:today(),sec:breathDur});if(state.calmLog.length>200)state.calmLog.length=200;const first=state.cafe.lastCalm!==today();addMemory('sparkles2','Chwila spokoju z Olive — taki oddech 🤍');if(first){state.cafe.lastCalm=today();addHearts(1);confetti();toast('Pięknie. Lila i Olive są takie spokojne 🤍','sparkles2');}else toast('Pięknie 🤍','sparkles2');save();render();}
/* — wdzięczność — */
function openGratitude(){const scrim=document.getElementById('scrim');scrim.innerHTML=`<div class="sheet"><h3>Chwila wdzięczności 🌿</h3><p class="note" style="margin:0 0 10px">Olive pyta: co dziś było miłe? Wpisz 1–3 rzeczy.</p><div class="field"><input id="g1" maxlength="60" placeholder="np. spacer w słońcu"></div><div class="field"><input id="g2" maxlength="60" placeholder="coś jeszcze? (opcjonalnie)"></div><div class="field"><input id="g3" maxlength="60" placeholder="i jeszcze? (opcjonalnie)"></div><div class="row"><button class="cancel" data-act="closesheet">Anuluj</button><button class="save" data-act="savegratitude">Zapisz</button></div></div>`;scrim.classList.add('show');}
function saveGratitude(){const vals=['g1','g2','g3'].map(id=>document.getElementById(id).value.trim()).filter(Boolean);if(!vals.length){closeSheet();return;}vals.forEach(v=>{state.gratitudeLog.unshift({date:today(),text:v});addMemory('leaf',`Wdzięczność: ${v}`);});if(state.gratitudeLog.length>200)state.gratitudeLog.length=200;const first=state.cafe.lastCalm!==today();if(first){state.cafe.lastCalm=today();addHearts(1);}closeSheet();toast('Olive uśmiecha się ciepło 🤍','heart');confetti();save();render();}
/* — nastrój — */
const MOODS=[['great','😊','spokojnie'],['good','🙂','dobrze'],['meh','😐','tak sobie'],['low','😟','trudno'],['tired','😴','zmęczona']];
function openMood(){const scrim=document.getElementById('scrim');const btns=MOODS.map(m=>`<button class="moodbtn" data-act="pickmood" data-id="${m[0]}"><span class="me">${m[1]}</span><small>${m[2]}</small></button>`).join('');scrim.innerHTML=`<div class="sheet"><h3>Jak się dziś czujesz? 💬</h3><p class="note" style="margin:0 0 10px">Olive słucha. Możesz jej powiedzieć.</p><div class="moodrow">${btns}</div><div class="row"><button class="cancel" data-act="closesheet">Może później</button></div></div>`;scrim.classList.add('show');}
function pickMood(id){const m=MOODS.find(x=>x[0]===id);state.moodLog.unshift({date:today(),mood:id});if(state.moodLog.length>120)state.moodLog.pop();const resp={great:'Cudownie 🤍 Cieszę się razem z Tobą.',good:'To miło słyszeć 🤍',meh:'Dziękuję, że powiedziałaś. Tak też bywa.',low:'Dziękuję, że mi zaufałaś. Jestem tu z Tobą 🤍',tired:'Odpocznij, na ile możesz. Herbatka czeka 🤍'}[id];addMemory('heart',`Powiedziałaś Olive: czuję się ${m[2]}`);closeSheet();toast(resp,'heart');save();render();}
/* — przepis — */
function showRecipe(){const rc=todayRecipe();if(!rc)return;toast(`${rc.ic} ${rc.name} — ${rc.line}`,'sparkles2');confetti();}
/* ===== Dom Lili — urządzanie ===== */
const FURN_LIST=[
  {id:'rug',name:'Dywan',cost:20,shadow:'none',defH:0.16},
  {id:'bed',name:'Łóżko',cost:55,shadow:'floor',defH:0.26},
  {id:'dog_bed',name:'Legowisko Lili',cost:30,shadow:'floor',defH:0.12},
  {id:'armchair',name:'Fotel',cost:50,shadow:'floor',defH:0.23},
  {id:'cushion',name:'Poduszka',cost:15,shadow:'none',defH:0.10},
  {id:'shelf',name:'Półka',cost:45,shadow:'floor',defH:0.24},
  {id:'lamp',name:'Lampa',cost:40,shadow:'floor',defH:0.25},
  {id:'plant',name:'Roślina',cost:25,shadow:'floor',defH:0.20},
  {id:'nightstand',name:'Szafka nocna',cost:35,shadow:'floor',defH:0.15},
  {id:'round_table',name:'Stolik',cost:40,shadow:'floor',defH:0.15},
  {id:'toy_chest',name:'Skrzynia',cost:45,shadow:'floor',defH:0.15},
  {id:'beanbag',name:'Pufa',cost:40,shadow:'floor',defH:0.17},
  {id:'teddy',name:'Miś',cost:20,shadow:'floor',defH:0.11},
  {id:'flower_vase',name:'Wazon',cost:25,shadow:'floor',defH:0.11},
  {id:'picture_frame',name:'Obrazek',cost:30,shadow:'none',defH:0.13,wall:true},
  {id:'wall_clock',name:'Zegar',cost:30,shadow:'none',defH:0.12,wall:true},
  {id:'wall_shelf',name:'Półka ścienna',cost:35,shadow:'none',defH:0.11,wall:true},
  {id:'string_lights',name:'Lampki',cost:30,shadow:'none',defH:0.06,wall:true},
  {id:'curtains',name:'Zasłony',cost:35,shadow:'none',defH:0.20,wall:true},
  {id:'hanging_plant',name:'Kwiat wiszący',cost:30,shadow:'none',defH:0.18,wall:true},
];
const FURN=Object.fromEntries(FURN_LIST.map(f=>[f.id,f]));
function homeTopZ(){const L=state.home.layout;let m=0;for(const k in L)m=Math.max(m,L[k].z||0);return m;}
function homePlace(id){const f=FURN[id];if(!f)return;state.home.layout[id]={x:0.5,y:f.wall?0.30:0.62,h:f.defH,z:homeTopZ()+1,fx:false,rot:0};state.home.sel=id;}
function homeBuy(id){const f=FURN[id];if(!f)return;if(state.home.owned.includes(id)){homePlace(id);save();render();return;}if(!spend(f.cost))return;state.home.owned.push(id);homePlace(id);addMemory('home',`Do domu Lili trafił/a: ${f.name.toLowerCase()}`);toast(`Kupiono: ${f.name.toLowerCase()}! Przeciągnij gdzie chcesz`,'gift');buzz();confetti();save();render();}
function homeRemove(){const id=state.home.sel;if(!id)return;delete state.home.layout[id];state.home.sel=null;save();render();}
function homeSelOp(fn){const id=state.home.sel,p=id&&state.home.layout[id];if(!p)return;fn(p);save();render();}
function worldHome(){const H=state.home,L=H.layout;
  const ids=Object.keys(L).sort((a,b)=>(L[a].z||0)-(L[b].z||0));
  const pieces=ids.map(id=>{const p=L[id],f=FURN[id];if(!f)return'';const sel=H.edit&&H.sel===id;
    const sh=f.shadow==='floor'?'filter:drop-shadow(2px 7px 5px rgba(60,42,52,.32));':'';
    return`<img class="furni ${sel?'sel':''}" data-fid="${id}" src="assets/home/${id}.png" draggable="false" style="left:${p.x*100}%;top:${p.y*100}%;height:${p.h*100}%;z-index:${10+(p.z||0)};transform:translate(-50%,-100%) rotate(${p.rot||0}deg) scaleX(${p.fx?-1:1});${sh}">`;}).join('');
  const room=`<div class="droom ${H.edit?'editing':''}" id="droom"><img class="droom-bg" src="assets/home/room_${H.room||'wood'}.png" draggable="false">${pieces}</div>`;
  const editBtn=`<button class="editbtn ${H.edit?'on':''}" data-act="home-edit">${icon(H.edit?'check':'pencil')} ${H.edit?'Gotowe':'Urządzaj'}</button>`;
  let toolbar='';
  if(H.edit){const has=H.sel&&L[H.sel];
    toolbar=`<div class="dtools ${has?'':'dim'}">
      <button data-act="home-rot" data-id="l">↺</button>
      <button data-act="home-rot" data-id="r">↻</button>
      <button data-act="home-flip">⇋</button>
      <button data-act="home-size" data-id="-">−</button>
      <button data-act="home-size" data-id="+">+</button>
      <button data-act="home-layer" data-id="d">↧</button>
      <button data-act="home-layer" data-id="u">↥</button>
      <button data-act="home-remove" class="del">✕</button>
    </div>`;}
  let drawer='';
  if(H.edit){
    const placed=new Set(Object.keys(L));
    const ownedNot=state.home.owned.filter(id=>!placed.has(id)).map(id=>FURN[id]).filter(Boolean);
    const shop=FURN_LIST.filter(f=>!state.home.owned.includes(f.id));
    const card=(f,act,label)=>`<button class="dcard" data-act="${act}" data-id="${f.id}"><img src="assets/home/${f.id}.png"><b>${esc(f.name)}</b><small>${label}</small></button>`;
    const ROOMS=[['wood','Drewno'],['palewood','Jasne drewno'],['tiles','Kafelki'],['carpet','Dywan']];
    const rooms=ROOMS.map(([id,name])=>`<button class="froom ${(H.room||'wood')===id?'on':''}" data-act="home-room" data-id="${id}"><img src="assets/home/room_${id}.png"><small>${name}</small></button>`).join('');
    drawer=`<div class="ddrawer">
      <div class="dlab">Podłoga / styl pokoju</div><div class="drow">${rooms}</div>
      ${ownedNot.length?`<div class="dlab">Twoje meble — dotknij, by postawić</div><div class="drow">${ownedNot.map(f=>card(f,'home-place','postaw')).join('')}</div>`:''}
      <div class="dlab">Sklep — kup za iskierki</div>
      <div class="drow">${shop.map(f=>card(f,'home-buy',icon('sparkle')+' '+f.cost)).join('')||'<small style="color:#9a8a7a;padding:8px">Masz już wszystko 🎉</small>'}</div>
    </div>`;}
  return locHeader('Dom Lili')+`<div class="dtop">${editBtn}</div>
    <div class="droom-wrap">${room}</div>${toolbar}${drawer}
    ${H.edit?'':`<div class="hintline">${icon('home')} Dotknij „Urządzaj", by przesuwać meble i kupować nowe</div>`}<div style="height:8px"></div>`;}
function initHomeScreen(){
  if(!(state.tab==='world'&&state.location==='home'&&state.home.edit))return;
  const room=document.getElementById('droom');if(!room)return;
  let drag=null;
  const onMove=e=>{if(!drag)return;const r=room.getBoundingClientRect();let x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;x=Math.max(0,Math.min(1,x));y=Math.max(0,Math.min(1,y));const p=state.home.layout[drag.id];if(!p)return;p.x=x;p.y=y;drag.el.style.left=x*100+'%';drag.el.style.top=y*100+'%';drag.moved=true;};
  room.querySelectorAll('.furni').forEach(el=>{
    el.addEventListener('pointerdown',e=>{const id=el.dataset.fid;state.home.sel=id;
      room.querySelectorAll('.furni').forEach(f=>f.classList.toggle('sel',f===el));
      const tb=document.querySelector('.dtools');if(tb)tb.classList.remove('dim');
      drag={id,el,moved:false};try{el.setPointerCapture(e.pointerId);}catch(_){}e.preventDefault();e.stopPropagation();});
    el.addEventListener('pointermove',onMove);
    el.addEventListener('pointerup',()=>{if(drag){const moved=drag.moved;drag=null;save();if(!moved)render();}});
  });
  room.addEventListener('pointerdown',e=>{if(e.target===room||e.target.classList.contains('droom-bg')){if(state.home.sel){state.home.sel=null;render();}}});
}
/* ===== Park — strefa-builder (kafelki + obiekty) ===== */
const PARK_TILES=[
  {id:'earth',name:'Ziemia',cost:0},
  {id:'grass',name:'Trawa',cost:8},
  {id:'path',name:'Ścieżka',cost:12},
  {id:'water',name:'Woda',cost:20},
];
const PARK_PROPS=[
  {id:'p_tree',name:'Drzewo',cost:30,defH:0.22},
  {id:'p_bush',name:'Krzew',cost:15,defH:0.12},
  {id:'p_flowers',name:'Klomb',cost:18,defH:0.10},
  {id:'p_fountain',name:'Fontanna',cost:60,defH:0.20},
  {id:'p_bench',name:'Ławka',cost:35,defH:0.12},
  {id:'p_lamp',name:'Lampa',cost:30,defH:0.20},
];
const PARKP=Object.fromEntries(PARK_PROPS.map(p=>[p.id,p]));
const PN=5,P_OX=50,P_OY=12,P_SX=10,P_SY=5,P_TW=20;
function parkPos(c,r){return{x:P_OX+(c-r)*P_SX,y:P_OY+(c+r)*P_SY};}
function parkTopZ(){let m=0;for(const k in state.park.objects)m=Math.max(m,state.park.objects[k].z||0);return m;}
function parkAddProp(id){const p=PARKP[id];const uid='o'+(state.park.nextUid++);state.park.objects[uid]={prop:id,gx:2,gy:2,h:p.defH,z:parkTopZ()+1,fx:false,rot:0};state.park.sel=uid;}
function parkBuyTile(id){const t=PARK_TILES.find(x=>x.id===id);if(!t)return;if(!state.park.ownedTiles.includes(id)){if(!spend(t.cost))return;state.park.ownedTiles.push(id);buzz();}state.park.tool=(state.park.tool===id?null:id);save();render();}
function parkBuyProp(id){const p=PARKP[id];if(!p)return;if(!state.park.ownedProps.includes(id)){if(!spend(p.cost))return;state.park.ownedProps.push(id);addMemory('sprout',`Do parku trafił/a: ${p.name.toLowerCase()}`);toast(`Kupiono: ${p.name.toLowerCase()}! Przeciągnij gdzie chcesz`,'gift');buzz();confetti();}parkAddProp(id);state.park.tool=null;save();render();}
function parkSelOp(fn){const id=state.park.sel,o=id&&state.park.objects[id];if(!o)return;fn(o);save();render();}
function parkRemove(){const id=state.park.sel;if(!id)return;delete state.park.objects[id];state.park.sel=null;save();render();}
function worldPark(){const P=state.park,walk=state.habits.find(h=>h.id==='walk');
  let tiles='';
  for(let r=0;r<PN;r++)for(let c=0;c<PN;c++){const pos=parkPos(c,r),t=P.grid[r][c]||'earth';
    tiles+=`<img class="ptile" data-pt="${c}_${r}" src="assets/park/t_${t}.png" draggable="false" style="left:${pos.x}cqw;top:${pos.y}cqw;width:${P_TW}cqw;z-index:${c+r}">`;}
  const ids=Object.keys(P.objects).sort((a,b)=>(P.objects[a].gx+P.objects[a].gy)-(P.objects[b].gx+P.objects[b].gy));
  const objs=ids.map(uid=>{const o=P.objects[uid],pos=parkPos(o.gx,o.gy),sel=P.edit&&P.sel===uid;
    return`<img class="pobj ${sel?'sel':''}" data-uid="${uid}" src="assets/park/${o.prop}.png" draggable="false" style="left:${pos.x}cqw;top:${pos.y}cqw;height:${o.h*100}cqw;z-index:${100+Math.round((o.gx+o.gy)*10)};transform:translate(-50%,-100%) rotate(${o.rot||0}deg) scaleX(${o.fx?-1:1});filter:drop-shadow(2px 6px 4px rgba(50,40,48,.30))">`;}).join('');
  const grid=`<div class="pgrid ${P.edit?'editing':''}" id="pgrid">${tiles}${objs}</div>`;
  const editBtn=`<button class="editbtn ${P.edit?'on':''}" data-act="park-edit">${icon(P.edit?'check':'pencil')} ${P.edit?'Gotowe':'Urządzaj'}</button>`;
  const walkBtn=`<button class="walkbtn" data-act="walk">${icon('walk')} Zabierz Lilę na spacer <span>+${walk?walk.sparks:12} ✦</span></button>`;
  let toolbar='';
  if(P.edit){const has=P.sel&&P.objects[P.sel];
    toolbar=`<div class="dtools ${has?'':'dim'}">
      <button data-act="park-rot" data-id="l">↺</button><button data-act="park-rot" data-id="r">↻</button>
      <button data-act="park-flip">⇋</button>
      <button data-act="park-size" data-id="-">−</button><button data-act="park-size" data-id="+">+</button>
      <button data-act="park-layer" data-id="d">↧</button><button data-act="park-layer" data-id="u">↥</button>
      <button data-act="park-remove" class="del">✕</button></div>`;}
  let drawer='';
  if(P.edit){
    const tcard=t=>{const owned=P.ownedTiles.includes(t.id),active=P.tool===t.id;return`<button class="dcard ${active?'on':''}" data-act="park-tile" data-id="${t.id}"><img src="assets/park/t_${t.id}.png"><b>${t.name}</b><small>${owned?(active?'maluję ✏️':'maluj'):icon('sparkle')+' '+t.cost}</small></button>`;};
    const pcard=p=>{const owned=P.ownedProps.includes(p.id);return`<button class="dcard" data-act="park-prop" data-id="${p.id}"><img src="assets/park/${p.id}.png"><b>${p.name}</b><small>${owned?'+ dodaj':icon('sparkle')+' '+p.cost}</small></button>`;};
    drawer=`<div class="ddrawer">
      <div class="dlab">Podłoże — dotknij typ, potem maluj po siatce</div><div class="drow">${PARK_TILES.map(tcard).join('')}</div>
      <div class="dlab">Obiekty</div><div class="drow">${PARK_PROPS.map(pcard).join('')}</div></div>`;}
  return locHeader('Park i ogród')+`<div class="dtop">${editBtn}</div><div class="pgwrap">${grid}</div>${toolbar}${drawer}${P.edit?'':walkBtn}<div style="height:8px"></div>`;}
function initParkScreen(){
  if(!(state.tab==='world'&&state.location==='park'&&state.park.edit))return;
  const grid=document.getElementById('pgrid');if(!grid)return;const P=state.park;
  function toCell(e){const r=grid.getBoundingClientRect();const xc=(e.clientX-r.left)/r.width*100,yc=(e.clientY-r.top)/r.width*100;const A=(xc-P_OX)/P_SX,B=(yc-P_OY)/P_SY;return{c:Math.round((A+B)/2),r:Math.round((B-A)/2),gx:(A+B)/2,gy:(B-A)/2};}
  function paintAt(e){const o=toCell(e);if(o.c>=0&&o.c<PN&&o.r>=0&&o.r<PN&&P.tool){if(P.grid[o.r][o.c]!==P.tool){P.grid[o.r][o.c]=P.tool;const el=grid.querySelector(`[data-pt="${o.c}_${o.r}"]`);if(el)el.src=`assets/park/t_${P.tool}.png`;}}}
  let odrag=null;
  grid.querySelectorAll('.pobj').forEach(el=>{
    el.addEventListener('pointerdown',e=>{const uid=el.dataset.uid;P.sel=uid;grid.querySelectorAll('.pobj').forEach(o=>o.classList.toggle('sel',o===el));const tb=document.querySelector('.dtools');if(tb)tb.classList.remove('dim');odrag={uid,el,moved:false};try{el.setPointerCapture(e.pointerId);}catch(_){}e.preventDefault();e.stopPropagation();});
    el.addEventListener('pointermove',e=>{if(!odrag||odrag.uid!==el.dataset.uid)return;const o=P.objects[odrag.uid];if(!o)return;const cc=toCell(e);o.gx=Math.max(0,Math.min(PN-1,cc.gx));o.gy=Math.max(0,Math.min(PN-1,cc.gy));const pos=parkPos(o.gx,o.gy);el.style.left=pos.x+'cqw';el.style.top=pos.y+'cqw';el.style.zIndex=100+Math.round((o.gx+o.gy)*10);odrag.moved=true;});
    el.addEventListener('pointerup',()=>{if(odrag){const m=odrag.moved;odrag=null;save();if(!m)render();}});
  });
  let painting=false;
  grid.addEventListener('pointerdown',e=>{if(e.target.classList.contains('pobj'))return;if(P.tool){painting=true;paintAt(e);e.preventDefault();}else if(P.sel){P.sel=null;render();}});
  grid.addEventListener('pointermove',e=>{if(painting)paintAt(e);});
  grid.addEventListener('pointerup',()=>{if(painting){painting=false;save();}});
}
function spaScreen(){const day=getDay(today());const spaDone=day.flags.spa;
  return locHeader('Spa Lili')+`<div class="room-wrap"><div class="room care-stage"><div style="position:absolute;inset:0;background:linear-gradient(180deg,#E3F1FB,#E9E4F7)"></div><div class="floor" style="background:#D4E6F2"></div><div class="roomlila">${lilaFig(spaDone?'sleep':'hero',160)}</div></div></div>
    <button class="walkbtn" style="background:#9C86D6" data-act="spaday" ${spaDone?'disabled':''}>${icon('sparkles2')} ${spaDone?'Lila odpoczywa dziś cudownie 🤍':'Zafunduj Lili dzień relaksu'} ${spaDone?'':' <span>+1 ♥</span>'}</button>
    <p class="note">Spa to wyjątkowe miejsce — wpadnij na chwilę relaksu z Lilą.</p><div style="height:8px"></div>`;}

/* ----- Podróż ----- */
function viewJourney(){const names=['N','Pn','Wt','Śr','Cz','Pt','So'];let cells='';
  for(let i=6;i>=0;i--){const d=shiftDay(today(),-i),day=state.log[d];const act=activeHabits().length;const score=day?Object.values(day.counts).filter(n=>n>=1).length:0;const win=day&&score>=Math.min(3,Math.max(1,act));const dt=new Date(d+'T00:00:00');cells+=`<div class="d"><small>${names[dt.getDay()]}</small><div class="dot ${win?'win':''} ${i===0?'today':''}">${win?icon('check'):dt.getDate()}</div></div>`;}
  const li=levelInfo(state.lifetime);
  const mems=state.journal.length?state.journal.slice(0,18).map(m=>`<div class="mem"><div class="mem-ic">${icon(m.ic)}</div><div class="mem-tx"><b>${esc(m.text)}</b><small>${relDay(m.date)}</small></div></div>`).join(''):`<p class="note">Twoje wspomnienia z Lilą pojawią się tutaj 🤍</p>`;
  const badges=BADGES.map(b=>{const got=b.test(state),t=TINT[b.color];return`<div class="badge ${got?'':'locked'}"><div class="em" style="background:${got?t.bg:'#EFE5DE'};color:${got?t.fg:'#B7A6AE'}">${icon(got?b.icon:'lock')}</div><small>${b.name}</small></div>`;}).join('');
  const moodEmoji={great:'😊',good:'🙂',meh:'😐',low:'😟',tired:'😴'};
  let moodCells='';for(let i=6;i>=0;i--){const d=shiftDay(today(),-i),m=state.moodLog.find(x=>x.date===d),dt=new Date(d+'T00:00:00');moodCells+=`<div class="d"><small>${names[dt.getDay()]}</small><div class="mface">${m?moodEmoji[m.mood]:'·'}</div></div>`;}
  const grats=state.gratitudeLog.slice(0,4).map(g=>`<div class="gitem">${icon('leaf')}<span>${esc(g.text)}</span><small>${relDay(g.date)}</small></div>`).join('')||`<p class="note" style="margin:6px 16px">Twoje wdzięczności z Olive pojawią się tutaj 🌿</p>`;
  const wellbeing=`<div class="cal">${moodCells}</div>
    <div class="stats" style="grid-template-columns:1fr 1fr"><div class="stat"><div class="n">${state.calmLog.length}</div><div class="l">Chwile spokoju 🫖</div></div><div class="stat"><div class="n">${state.gratitudeLog.length}</div><div class="l">Wdzięczności 🌿</div></div></div>
    <div class="gwrap">${grats}</div>`;
  return header()+`<div class="sec"><h2>Ten tydzień</h2></div><div class="cal">${cells}</div>
    <div class="stats"><div class="stat"><div class="n">${displayStreak()}</div><div class="l">Seria dni${state.streak.freezes?` · ${state.streak.freezes} ❄`:''}</div></div><div class="stat"><div class="n">${state.lifetime}</div><div class="l">Zdobyte iskierki</div></div><div class="stat"><div class="n">${levelInfo(state.lifetime).level}</div><div class="l">Poziom Lili</div></div><div class="stat"><div class="n">${state.streak.best||0}</div><div class="l">Najlepsza seria</div></div></div>
    <div class="sec"><h2>Twój spokój</h2><span class="meta">z Olive 🦌</span></div>${wellbeing}
    <div class="sec"><h2>Wspomnienia</h2><span class="meta">${icon('book')}</span></div><div class="memwrap">${mems}</div>
    <div class="sec"><h2>Odznaki</h2><span class="meta">Lila poz. ${li.level}</span></div><div class="badges">${badges}</div><div style="height:8px"></div>`;}

/* ----- Nawyki ----- */
function viewHabits(){const rows=state.habits.map(h=>{const t=TINT[h.color]||TINT.pink;return`<div class="erow ${h.active?'':'off'}"><div class="ic" style="width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:${t.bg};color:${t.fg}">${icon(h.icon)}</div><div class="tx" ${h.builtin?'':`data-act="edit" data-id="${h.id}"`}><b>${esc(h.name)} ${h.builtin?'':icon('pencil','style="width:13px;height:13px;vertical-align:-1px;opacity:.5"')}</b><span>${esc(h.sub)} · ${h.sparks} iskierek${h.repeatable?' · wielokrotny':''}</span></div><div class="toggle ${h.active?'on':''}" data-act="toggle" data-id="${h.id}"><i></i></div></div>`;}).join('');
  return header()+`<div class="sec"><h2>Twoje nawyki</h2><span class="meta">${activeHabits().length} aktywnych</span></div><p class="note">Włączaj i wyłączaj nawyki, kiedy chcesz. Możesz też dodać własne.</p><div class="edit">${rows}</div><button class="addbtn" data-act="add">${icon('plus')} Dodaj własny nawyk</button><div style="height:8px"></div>`;}

/* ===== okienka ===== */
let sheetEditId=null,sheetIcon='star';
function openSheet(id){sheetEditId=id;const h=id?state.habits.find(x=>x.id===id):null;sheetIcon=h?h.icon:'star';const picks=['star','heart','leaf','droplet','sun','moon','barbell','walk','apple','bolt','shoe','sparkle'];const scrim=document.getElementById('scrim');scrim.innerHTML=`<div class="sheet"><h3>${h?'Edytuj nawyk':'Nowy nawyk'}</h3><div class="field"><label>Nazwa</label><input id="f-name" maxlength="28" placeholder="np. Rozciąganie" value="${h?esc(h.name):''}"></div><div class="field"><label>Krótki opis</label><input id="f-sub" maxlength="40" placeholder="np. 5 minut rozciągania" value="${h?esc(h.sub):''}"></div><div class="field"><label>Wybierz ikonę</label><div class="iconpick" id="f-icons">${picks.map(p=>`<button data-act="picon" data-id="${p}" class="${p===sheetIcon?'sel':''}">${icon(p)}</button>`).join('')}</div></div><div class="row">${h&&!h.builtin?`<button class="cancel" data-act="delhabit" data-id="${id}" style="flex:.6;color:var(--pink-deep)">Usuń</button>`:''}<button class="cancel" data-act="closesheet">Anuluj</button><button class="save" data-act="savehabit">Zapisz</button></div></div>`;scrim.classList.add('show');}
function openSeedSheet(idx){const scrim=document.getElementById('scrim');scrim.innerHTML=`<div class="sheet"><h3>Zasadź nasionko</h3><p class="note" style="margin:0 0 10px">Rośnie przez kilka prawdziwych dni — podlewaj codziennie i patrz, jak kwitnie.</p><div class="shop">${SEEDS.map(s=>`<div class="shopcard"><div class="pre">${s.bloom.replace('width="100%"','width="50"')}</div><b>${esc(s.name)}</b><button class="buy ${state.sparks<s.cost?'cant':''}" data-act="doplant" data-id="${idx}:${s.id}">${icon('sparkle')} ${s.cost}</button></div>`).join('')}</div><div class="row"><button class="cancel" data-act="closesheet">Anuluj</button></div></div>`;scrim.classList.add('show');}
function closeSheet(){const s=document.getElementById('scrim');s.classList.remove('show');setTimeout(()=>s.innerHTML='',250);}
function saveHabit(){const name=document.getElementById('f-name').value.trim()||'Mój nawyk';const sub=document.getElementById('f-sub').value.trim()||'Mały zdrowy sukces';if(sheetEditId){const h=state.habits.find(x=>x.id===sheetEditId);h.name=name;h.sub=sub;h.icon=sheetIcon;}else state.habits.push({id:'c'+Date.now(),name,sub,icon:sheetIcon,color:'pink',sparks:10,repeatable:false,active:true,builtin:false});closeSheet();save();render();}
function delHabit(id){state.habits=state.habits.filter(h=>h.id!==id);closeSheet();save();render();}

/* ===== zdarzenia ===== */
function handle(a,id){switch(a){
  case'nav':state.tab=id;if(id==='world')state.location='map';render();scrollTo(0,0);break;
  case'goto':{if(placeLocked(id)){toast(`Odblokuje się na poziomie ${PLACE_LEVEL[id]}`,'lock');break;}state.location=id;render();scrollTo(0,0);break;}
  case'backmap':state.location='map';render();scrollTo(0,0);break;
  case'home-edit':state.home.edit=!state.home.edit;if(!state.home.edit)state.home.sel=null;save();render();break;
  case'home-buy':homeBuy(id);break;
  case'home-place':homePlace(id);save();render();break;
  case'home-remove':homeRemove();break;
  case'home-flip':homeSelOp(p=>p.fx=!p.fx);break;
  case'home-rot':homeSelOp(p=>p.rot=((p.rot||0)+(id==='l'?-15:15)));break;
  case'home-size':homeSelOp(p=>p.h=Math.max(0.05,Math.min(0.6,p.h+(id==='+'?0.015:-0.015))));break;
  case'home-layer':homeSelOp(p=>p.z=Math.max(0,(p.z||0)+(id==='u'?1:-1)));break;
  case'home-room':state.home.room=id;save();render();break;
  case'park-edit':state.park.edit=!state.park.edit;if(!state.park.edit){state.park.sel=null;state.park.tool=null;}save();render();break;
  case'park-tile':parkBuyTile(id);break;
  case'park-prop':parkBuyProp(id);break;
  case'park-flip':parkSelOp(o=>o.fx=!o.fx);break;
  case'park-rot':parkSelOp(o=>o.rot=((o.rot||0)+(id==='l'?-15:15)));break;
  case'park-size':parkSelOp(o=>o.h=Math.max(0.04,Math.min(0.5,o.h+(id==='+'?0.012:-0.012))));break;
  case'park-layer':parkSelOp(o=>o.z=Math.max(0,(o.z||0)+(id==='u'?1:-1)));break;
  case'park-remove':parkRemove();break;
  case'cafe-go':{if(placeLocked('cafe')){toast(`Kawiarnia otworzy się na poziomie ${PLACE_LEVEL.cafe}`,'lock');break;}state.tab='world';state.location='cafe';render();scrollTo(0,0);break;}
  case'cafe-tea':startBreath(180);break;
  case'cafe-quick':startBreath(60);break;
  case'cafe-gratitude':openGratitude();break;
  case'cafe-mood':openMood();break;
  case'cafe-recipe':showRecipe();break;
  case'breath-stop':stopBreath();break;
  case'savegratitude':saveGratitude();break;
  case'pickmood':pickMood(id);break;
  case'tap':tapHabit(state.habits.find(h=>h.id===id));break;
  case'dec':decHabit(state.habits.find(h=>h.id===id));break;
  case'treat':giveTreat(TREATS.find(t=>t.id===id));break;
  case'buytheme':buyTheme(id);break;
  case'buyhome':buyHome(id);break;
  case'unlockspa':unlockPlace('spa',SPA_COST);break;
  case'spaday':{const day=getDay(today());if(day.flags.spa){toast('Lila już odpoczywa dziś 🤍','heart');break;}day.flags.spa=1;addHearts(1);addMemory('sparkles2','Dzień spa z Lilą — taki relaks!');toast('Lila relaksuje się cudownie!','sparkles2');confetti();save();render();break;}
  case'plant':openSeedSheet(+id);break;
  case'plantpick':openSeedSheet(0);break;
  case'doplant':{const[i,s]=id.split(':');plantSeed(+i,s);break;}
  case'water':water(+id);break;
  case'harvest':harvest(+id);break;
  case'walk':{const w=state.habits.find(h=>h.id==='walk');if(w&&w.active)tapHabit(w);else toast('Włącz „Spacer po posiłku" w Nawykach','heart');break;}
  case'toggle':{const h=state.habits.find(x=>x.id===id);h.active=!h.active;save();render();break;}
  case'edit':openSheet(id);break;case'add':openSheet(null);break;
  case'picon':sheetIcon=id;document.querySelectorAll('#f-icons button').forEach(b=>b.classList.toggle('sel',b.dataset.id===id));break;
  case'savehabit':saveHabit();break;case'delhabit':delHabit(id);break;case'closesheet':closeSheet();break;
}}
function esc(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
document.addEventListener('click',e=>{const t=e.target.closest('[data-act]');if(!t)return;handle(t.dataset.act,t.dataset.id);});
document.addEventListener('click',e=>{if(e.target.id==='scrim')closeSheet();});

/* ===== start ===== */
load();
if(!localStorage.getItem(KEY))save();
render();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
  navigator.serviceWorker.addEventListener('message',e=>{if(e.data&&e.data.type==='SW_UPDATED')window.location.reload();});
}
if(window.Cloud)window.Cloud.init();
