'use strict';

/* ---------- icons ---------- */
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
  calendar:'<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4"/>',
  pencil:'<path d="M4 20l1-4 11-11 3 3-11 11z"/>',
  trophy:'<path d="M7 4h10v3a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9.5 14h5l-1 3h-3zM8 20h8"/>',
  lock:'<path d="M6 11h12v8H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3"/>',
  bolt:'<path d="M13 3L5 13h5l-1 8 9-11h-6z" fill="currentColor" stroke="none"/>',
  apple:'<path d="M12 8c-1.4-1.8-4-2.3-5.6-.6C4.6 9.2 5.1 13 7 15.4c1.3 1.6 2.6 2.1 4.4 1.1M12 8c1.4-1.8 4-2.3 5.6-.6C19.4 9.2 18.9 13 17 15.4c-1.3 1.6-2.6 2.1-4.4 1.1M12 8c.2-1.7 1.3-2.8 3-2.9"/>',
  shoe:'<path d="M4 16c0-2 .8-3 .8-5l3 1 2 2 6 1c2 .3 4 1 4 3v2H4z"/><path d="M6 14l2 1M9 13l2 1M12 14l2 1"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  paw:'<circle cx="7" cy="10" r="1.7" fill="currentColor" stroke="none"/><circle cx="12" cy="8" r="1.7" fill="currentColor" stroke="none"/><circle cx="17" cy="10" r="1.7" fill="currentColor" stroke="none"/><path d="M12 12c-3 0-5 2-5 4.5C7 19 9.5 19 12 19s5 0 5-2.5C17 14 15 12 12 12z" fill="currentColor" stroke="none"/>'
};
const icon = (n,extra='') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" ${extra}>${ICONS[n]||''}</svg>`;

const TINT = {
  pink:{bg:'#FCE7EF',fg:'#D9608A'}, lav:{bg:'#EEE7FA',fg:'#7E63C4'},
  mint:{bg:'#E3F5EC',fg:'#2F9B72'}, amber:{bg:'#FCEFD6',fg:'#C77E12'},
  blue:{bg:'#E4F1FB',fg:'#2E78B8'}, green:{bg:'#EAF4DD',fg:'#5B8C24'}
};

/* ---------- habits ---------- */
const PRESET_HABITS = [
  {id:'walk',name:'Move after a meal',sub:'A little walk after eating',icon:'walk',color:'mint',sparks:12,repeatable:true,active:true,builtin:true},
  {id:'sweets',name:'Sweet-smart day',sub:'A day without sweets',icon:'apple',color:'pink',sparks:12,repeatable:false,active:true,builtin:true},
  {id:'veg',name:'Rainbow plate',sub:'Add some veg or fruit',icon:'leaf',color:'green',sparks:10,repeatable:true,active:true,builtin:true},
  {id:'breakfast',name:'Sunrise fuel',sub:'Protein-y breakfast',icon:'sun',color:'amber',sparks:10,repeatable:false,active:true,builtin:true},
  {id:'energy',name:'Energy',sub:'Get moving & have fun',icon:'bolt',color:'lav',sparks:12,repeatable:false,active:true,builtin:true},
  {id:'order',name:'Veggies first',sub:'Veg & protein before carbs',icon:'leaf',color:'green',sparks:8,repeatable:false,active:true,builtin:true},
  {id:'strength',name:'Strength spark',sub:'5-min mini workout',icon:'barbell',color:'pink',sparks:10,repeatable:false,active:true,builtin:true},
  {id:'steps',name:'Steps',sub:'Reached your watch step goal',icon:'shoe',color:'mint',sparks:12,repeatable:false,active:true,builtin:true},
  // optional extras (off by default — in the library to switch on)
  {id:'water',name:'Splash',sub:'Swap to water',icon:'droplet',color:'blue',sparks:8,repeatable:true,active:false,builtin:true},
  {id:'sleep',name:'Cozy night',sub:'Sleep on time',icon:'moon',color:'lav',sparks:10,repeatable:false,active:false,builtin:true},
  {id:'calm',name:'Calm moment',sub:'2 min of breathing',icon:'heart',color:'pink',sparks:8,repeatable:false,active:false,builtin:true}
];

/* ---------- world catalog ---------- */
const THEMES = [
  {id:'cream',name:'Cream',cost:0,wall:'linear-gradient(180deg,#FBEAF1,#F4E9FA)',floor:'#EAD7CB'},
  {id:'mint',name:'Mint',cost:60,wall:'linear-gradient(180deg,#E6F6EE,#D8F0E6)',floor:'#C2E6D4'},
  {id:'lavender',name:'Lavender',cost:60,wall:'linear-gradient(180deg,#EFE8FB,#E7DEF8)',floor:'#D8CAF1'},
  {id:'sky',name:'Sky',cost:120,wall:'linear-gradient(180deg,#E6F1FB,#DCEBF7)',floor:'#CFE6F5'},
  {id:'sunset',name:'Sunset',cost:200,wall:'linear-gradient(180deg,#FDE8D8,#FBD7E3)',floor:'#F3C9B0'},
  {id:'starry',name:'Starry night',cost:300,wall:'linear-gradient(180deg,#4a4478,#6a5da0)',floor:'#39335c'}
];

// home decorations — sold in the Furniture shop
const DECOR = [
  {id:'rug',name:'Cozy rug',cost:40,pos:'left:50%;bottom:5%;transform:translateX(-50%);width:64%;z-index:2',
   svg:'<svg viewBox="0 0 200 56" width="100%"><ellipse cx="100" cy="30" rx="96" ry="24" fill="#F2C2D6"/><ellipse cx="100" cy="30" rx="70" ry="16" fill="#FBE3EC"/><ellipse cx="100" cy="30" rx="44" ry="9" fill="#F7CFDE"/></svg>'},
  {id:'plant',name:'Leafy plant',cost:70,pos:'left:5%;bottom:30%;width:20%;z-index:3',
   svg:'<svg viewBox="0 0 60 96" width="100%"><path d="M30 56C14 50 12 30 16 16c10 4 16 22 14 40z" fill="#8FD7BC"/><path d="M30 56C46 48 50 28 46 14c-12 4-18 24-16 42z" fill="#A6E0C9"/><path d="M30 60c-2-16 0-30 0-30s2 14 0 30z" fill="#5FB894"/><path d="M20 60h20l-3 30H23z" fill="#E7A6BE"/></svg>'},
  {id:'cushion',name:'Floor cushion',cost:35,pos:'right:10%;bottom:8%;width:22%;z-index:4',
   svg:'<svg viewBox="0 0 70 52" width="100%"><rect x="4" y="10" width="62" height="36" rx="14" fill="#C7B4EC"/><rect x="4" y="10" width="62" height="36" rx="14" fill="none" stroke="#A98EE0" stroke-width="2"/><circle cx="35" cy="28" r="4" fill="#A98EE0"/></svg>'},
  {id:'lamp',name:'Warm lamp',cost:90,pos:'right:4%;bottom:30%;width:18%;z-index:3',
   svg:'<svg viewBox="0 0 50 110" width="100%"><path d="M10 40h30l-6-22H16z" fill="#F6D27A"/><path d="M10 40h30l-6-22H16z" fill="none" stroke="#E6B84E" stroke-width="2"/><rect x="23" y="40" width="4" height="56" fill="#C9A98A"/><ellipse cx="25" cy="100" rx="16" ry="6" fill="#C9A98A"/></svg>'},
  {id:'frame',name:'Photo frame',cost:60,pos:'left:9%;top:14%;width:18%;z-index:3',
   svg:'<svg viewBox="0 0 60 54" width="100%"><rect x="4" y="4" width="52" height="42" rx="6" fill="#fff" stroke="#E7C9B0" stroke-width="3"/><circle cx="30" cy="22" r="8" fill="#F2C2D6"/><path d="M14 40c4-9 12-9 16 0M30 40c3-6 9-6 12 0" fill="#9FD9BE"/></svg>'},
  {id:'flowers',name:'Flower vase',cost:50,pos:'left:32%;bottom:7%;width:13%;z-index:4',
   svg:'<svg viewBox="0 0 44 70" width="100%"><circle cx="14" cy="16" r="7" fill="#F2A0BC"/><circle cx="30" cy="13" r="7" fill="#C7B4EC"/><circle cx="22" cy="22" r="7" fill="#F6D27A"/><circle cx="14" cy="16" r="2.5" fill="#fff"/><circle cx="30" cy="13" r="2.5" fill="#fff"/><circle cx="22" cy="22" r="2.5" fill="#fff"/><path d="M22 26v18M16 30l6 6M28 30l-6 6" stroke="#7FBE9C" fill="none" stroke-width="2"/><path d="M12 44h20l-3 22H15z" fill="#9FD0E8"/></svg>'}
];

// café treats — cosmetic only, placed in home
const CAFE = [
  {id:'cupcake',name:'Cupcake',cost:45,cafe:true,pos:'right:30%;bottom:30%;width:9%;z-index:4',
   svg:'<svg viewBox="0 0 40 50" width="100%"><path d="M8 22h24l-3 24H11z" fill="#F4D9A6"/><path d="M8 23c0-7 5-12 12-12s12 5 12 12z" fill="#F7B6CE"/><circle cx="20" cy="9" r="3" fill="#E2607F"/></svg>'},
  {id:'smoothie',name:'Berry smoothie',cost:40,cafe:true,pos:'right:18%;bottom:30%;width:7%;z-index:4',
   svg:'<svg viewBox="0 0 30 52" width="100%"><path d="M7 15h16l-2 32H9z" fill="#F2A0BC"/><rect x="6" y="11" width="18" height="5" rx="2" fill="#fff"/><rect x="18" y="2" width="3" height="13" fill="#9FD9BE"/><circle cx="13" cy="9" r="2.2" fill="#fff"/></svg>'},
  {id:'icecream',name:'Ice cream',cost:50,cafe:true,pos:'left:20%;bottom:9%;width:7%;z-index:4',
   svg:'<svg viewBox="0 0 28 56" width="100%"><path d="M9 26l5 28 5-28z" fill="#F4D9A6"/><circle cx="14" cy="18" r="9" fill="#C7B4EC"/><circle cx="14" cy="11" r="7" fill="#F7B6CE"/><circle cx="14" cy="8" r="2.5" fill="#E2607F"/></svg>'},
  {id:'fruitbowl',name:'Fruit bowl',cost:55,cafe:true,pos:'left:40%;bottom:7%;width:13%;z-index:4',
   svg:'<svg viewBox="0 0 50 38" width="100%"><circle cx="16" cy="15" r="8" fill="#F2A0BC"/><circle cx="32" cy="13" r="8" fill="#9FD9BE"/><circle cx="25" cy="19" r="8" fill="#F6D27A"/><path d="M6 19h38l-4 15H10z" fill="#E7C9B0"/></svg>'},
  {id:'donut',name:'Donut art',cost:50,cafe:true,pos:'right:11%;top:13%;width:15%;z-index:3',
   svg:'<svg viewBox="0 0 48 48" width="100%"><rect x="3" y="3" width="42" height="42" rx="6" fill="#fff" stroke="#E7C9B0" stroke-width="3"/><circle cx="24" cy="24" r="12" fill="#F7B6CE"/><circle cx="24" cy="24" r="4.5" fill="#fff"/><path d="M15 20l2 2M30 18l-2 2M28 30l2 2M18 30l-2 2" stroke="#E2607F" stroke-width="2"/></svg>'}
];

const HOME_ITEMS = DECOR.concat(CAFE);

// accessories — sold in the Boutique, worn by Lila (one at a time)
const ACC = [
  {id:'bow',name:'Pink bow',cost:40,pos:'top:0%;left:50%;transform:translateX(-50%);width:30%',
   svg:'<svg viewBox="0 0 40 24" width="100%"><path d="M20 12c-4-9-16-7-16 0s12 9 16 0z" fill="#F2A0BC"/><path d="M20 12c4-9 16-7 16 0s-12 9-16 0z" fill="#F2A0BC"/><circle cx="20" cy="12" r="4" fill="#E2607F"/></svg>'},
  {id:'crown',name:'Flower crown',cost:90,pos:'top:-4%;left:50%;transform:translateX(-50%);width:48%',
   svg:'<svg viewBox="0 0 84 26" width="100%"><path d="M6 22q36 -16 72 0" stroke="#8FD7BC" fill="none" stroke-width="3"/>'+
        [[16,'#F2A0BC'],[33,'#F6D27A'],[51,'#C7B4EC'],[68,'#F2A0BC']].map(([x,c])=>`<circle cx="${x}" cy="11" r="6.5" fill="${c}"/><circle cx="${x}" cy="11" r="2.5" fill="#fff"/>`).join('')+'</svg>'},
  {id:'clip',name:'Star clip',cost:35,pos:'top:6%;left:20%;width:18%',
   svg:'<svg viewBox="0 0 24 24" width="100%"><path d="M12 2l3 6 6 1-4.5 4.5 1 6L12 17l-5.5 2.5 1-6L4 9l6-1z" fill="#F6D27A"/></svg>'},
  {id:'shades',name:'Heart shades',cost:70,pos:'top:22%;left:50%;transform:translateX(-50%);width:44%',
   svg:'<svg viewBox="0 0 60 24" width="100%"><path d="M26 7h8" stroke="#E2607F" stroke-width="3"/><path d="M15 6c-5-3-11 2-7 7 2 3 7 6 7 6s5-3 7-6c4-5-2-10-7-7z" fill="#E2607F"/><path d="M45 6c-5-3-11 2-7 7 2 3 7 6 7 6s5-3 7-6c4-5-2-10-7-7z" fill="#E2607F"/></svg>'},
  {id:'party',name:'Party hat',cost:60,pos:'top:-22%;left:52%;transform:translateX(-50%);width:26%',
   svg:'<svg viewBox="0 0 30 40" width="100%"><path d="M15 2l10 32H5z" fill="#C7B4EC"/><circle cx="15" cy="3" r="3" fill="#F6D27A"/><circle cx="11" cy="15" r="2" fill="#fff"/><circle cx="18" cy="24" r="2" fill="#fff"/></svg>'},
  {id:'tiara',name:'Tiara',cost:120,pos:'top:2%;left:50%;transform:translateX(-50%);width:34%',
   svg:'<svg viewBox="0 0 50 22" width="100%"><path d="M5 20l4-13 8 9 8-13 8 13 8-9 4 13z" fill="#F6D27A"/><circle cx="25" cy="6" r="3" fill="#F2A0BC"/></svg>'}
];

// park plantings — placed in the Park
const PARK = [
  {id:'tulips',name:'Tulips',cost:40,pos:'left:12%;bottom:18%;width:16%;z-index:3',
   svg:'<svg viewBox="0 0 40 50" width="100%"><path d="M10 50V24M20 50V20M30 50V24" stroke="#5FB894" stroke-width="3"/><path d="M10 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#F2A0BC"/><path d="M20 20c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#E2607F"/><path d="M30 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#C7B4EC"/></svg>'},
  {id:'sunflower',name:'Sunflower',cost:55,pos:'right:14%;bottom:20%;width:13%;z-index:3',
   svg:'<svg viewBox="0 0 44 60" width="100%"><path d="M22 60V28" stroke="#5FB894" stroke-width="3"/>'+
        [0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="22" cy="16" rx="4" ry="9" fill="#F6D27A" transform="rotate(${a} 22 16)"/>`).join('')+'<circle cx="22" cy="16" r="7" fill="#C77E12"/></svg>'},
  {id:'rosebush',name:'Rose bush',cost:70,pos:'left:31%;bottom:13%;width:18%;z-index:3',
   svg:'<svg viewBox="0 0 50 40" width="100%"><path d="M6 40c0-12 9-20 19-20s19 8 19 20z" fill="#7FBE9C"/><circle cx="16" cy="24" r="5" fill="#E2607F"/><circle cx="32" cy="22" r="5" fill="#F2A0BC"/><circle cx="24" cy="30" r="5" fill="#E2607F"/></svg>'},
  {id:'butterfly',name:'Butterfly friend',cost:60,pos:'right:30%;top:16%;width:11%;z-index:6',
   svg:'<svg viewBox="0 0 40 32" width="100%"><path d="M20 16C12 2 2 6 6 14c-4 8 6 12 14 2z" fill="#C7B4EC"/><path d="M20 16c8-14 18-10 14-2 4 8-6 12-14 2z" fill="#F2A0BC"/><path d="M20 8v16" stroke="#5A4A52" stroke-width="2"/></svg>'},
  {id:'fountain',name:'Fountain',cost:140,pos:'left:44%;bottom:8%;width:22%;z-index:2',
   svg:'<svg viewBox="0 0 60 50" width="100%"><ellipse cx="30" cy="42" rx="27" ry="8" fill="#9FD0E8"/><rect x="27" y="18" width="6" height="22" fill="#D8CFE0"/><ellipse cx="30" cy="18" rx="10" ry="4" fill="#BFE0F0"/><path d="M30 18c-2-7 0-11 0-11M30 18c0-7 2-9 4-10" fill="none" stroke="#BFE0F0" stroke-width="2"/></svg>'},
  {id:'picnic',name:'Picnic blanket',cost:50,pos:'right:34%;bottom:11%;width:24%;z-index:2',
   svg:'<svg viewBox="0 0 50 34" width="100%"><rect x="4" y="14" width="42" height="18" rx="3" fill="#F7B6CE"/><path d="M14 14v18M24 14v18M34 14v18M4 20h42M4 26h42" stroke="#fff" stroke-width="2" opacity=".6"/></svg>'}
];

const BADGES = [
  {id:'first',name:'First step',icon:'paw',color:'pink',test:s=>s.lifetime>=1},
  {id:'s3',name:'3-day streak',icon:'flame',color:'amber',test:s=>s.streak.best>=3},
  {id:'s7',name:'One week',icon:'flame',color:'amber',test:s=>s.streak.best>=7},
  {id:'sp100',name:'100 sparks',icon:'sparkle',color:'lav',test:s=>s.lifetime>=100},
  {id:'lvl5',name:'Lila lvl 5',icon:'star',color:'pink',test:s=>levelInfo(s.lifetime).level>=5},
  {id:'shop',name:'First treat',icon:'gift',color:'mint',test:s=>s.inventory.length+s.ownedAcc.length+(s.ownedThemes.length-1)+s.parkPlaced.length>=1},
  {id:'s14',name:'Two weeks',icon:'flame',color:'amber',test:s=>s.streak.best>=14},
  {id:'sp500',name:'500 sparks',icon:'sparkle',color:'lav',test:s=>s.lifetime>=500},
  {id:'s30',name:'A whole month',icon:'trophy',color:'mint',test:s=>s.streak.best>=30}
];

const PERFECT_BONUS = 15;

/* ---------- date helpers ---------- */
const pad = n => String(n).padStart(2,'0');
const dstr = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today = () => dstr(new Date());
function daysBetween(a,b){ const da=new Date(a+'T00:00:00'), db=new Date(b+'T00:00:00'); return Math.round((db-da)/86400000); }
function shiftDay(ds,delta){ const d=new Date(ds+'T00:00:00'); d.setDate(d.getDate()+delta); return dstr(d); }

/* ---------- state ---------- */
const KEY='lila.v1';
let state;
function freshState(){
  return { v:2, name:'friend', createdAt:today(), sparks:0, lifetime:0,
    streak:{count:0,best:0,lastWin:null,freezes:1},
    habits:JSON.parse(JSON.stringify(PRESET_HABITS)),
    log:{}, ownedThemes:['cream'], theme:'cream',
    inventory:[], ownedAcc:[], accessory:null, parkPlaced:[],
    tab:'today', location:'map' };
}
function load(){
  try{ const raw=localStorage.getItem(KEY); state = raw? JSON.parse(raw) : freshState(); }
  catch(e){ state=freshState(); }
  // migrations / defaults
  state.ownedThemes ??= ['cream']; state.theme ??= 'cream';
  state.inventory ??= []; state.ownedAcc ??= []; state.accessory ??= null;
  state.parkPlaced ??= []; state.location ??= 'map'; state.lifetime ??= 0;
  PRESET_HABITS.forEach(p=>{ if(!state.habits.find(h=>h.id===p.id)) state.habits.push(JSON.parse(JSON.stringify(p))); });
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }

/* ---------- derived ---------- */
const activeHabits = () => state.habits.filter(h=>h.active);
function getDay(d){ if(!state.log[d]) state.log[d]={counts:{},perfect:false}; return state.log[d]; }
const countFor = (d,id) => (state.log[d]?.counts[id])||0;
const dailyGoal = () => Math.min(3, Math.max(1, activeHabits().length));
function levelInfo(lifetime){
  let need=0, lvl=1, step=60;
  while(lifetime >= need+step){ need+=step; lvl++; step=Math.round(step*1.25); }
  return {level:lvl, pct:Math.min(100,Math.round((lifetime-need)/step*100))};
}
function displayStreak(){
  const s=state.streak; if(!s.lastWin) return 0;
  const gap=daysBetween(s.lastWin, today());
  if(gap<=1) return s.count;
  if(gap-1 <= s.freezes) return s.count;
  return 0;
}

/* ---------- actions ---------- */
function addSparks(n){
  const before=levelInfo(state.lifetime).level;
  state.sparks+=n; state.lifetime+=n;
  const after=levelInfo(state.lifetime).level;
  if(after>before){ setTimeout(()=>{ toast(`Lila grew to level ${after}!`,'star'); confetti(); }, 700); }
}
function registerWin(d){
  const s=state.streak; if(s.lastWin===d) return;
  if(!s.lastWin){ s.count=1; }
  else{ const gap=daysBetween(s.lastWin,d);
    if(gap===1) s.count++;
    else if(gap>1){ const missed=gap-1;
      if(s.freezes>=missed){ s.freezes-=missed; s.count++; toast('Lila kept your streak cozy','flame'); }
      else s.count=1; } }
  s.lastWin=d; s.best=Math.max(s.best,s.count);
  if(s.count>0 && s.count%5===0) s.freezes=Math.min(3,s.freezes+1);
}
function recompute(){
  const t=today(), day=getDay(t), act=activeHabits();
  const done=act.filter(h=>countFor(t,h.id)>=1).length;
  if(done>=dailyGoal() && state.streak.lastWin!==t) registerWin(t);
  if(act.length>0 && done===act.length && !day.perfect){
    day.perfect=true; addSparks(PERFECT_BONUS);
    setTimeout(()=>{ toast(`Perfect day! +${PERFECT_BONUS} bonus`,'sparkle'); confetti(); }, 250);
  }
  save();
}
function tapHabit(h){
  const t=today(), day=getDay(t), cur=countFor(t,h.id);
  if(h.repeatable){ if(cur>=6) return; day.counts[h.id]=cur+1; addSparks(h.sparks); }
  else { if(cur>=1){ day.counts[h.id]=0; state.sparks=Math.max(0,state.sparks-h.sparks); state.lifetime=Math.max(0,state.lifetime-h.sparks); }
         else { day.counts[h.id]=1; addSparks(h.sparks); } }
  buzz(); celebratePop(); recompute(); render();
}
function decHabit(h){
  const t=today(), day=getDay(t), cur=countFor(t,h.id); if(cur<=0) return;
  day.counts[h.id]=cur-1; state.sparks=Math.max(0,state.sparks-h.sparks); state.lifetime=Math.max(0,state.lifetime-h.sparks);
  save(); render();
}

/* ---------- buying ---------- */
function spend(cost){ if(state.sparks<cost){ toast('Keep going — almost there!','sparkle'); return false; } state.sparks-=cost; return true; }
function buyTheme(id){
  if(state.ownedThemes.includes(id)){ state.theme=id; save(); render(); return; }
  const th=THEMES.find(t=>t.id===id); if(!spend(th.cost)) return;
  state.ownedThemes.push(id); state.theme=id; toast(`${th.name} room unlocked!`,'gift'); confetti(); save(); render();
}
function buyHome(id){
  if(state.inventory.includes(id)) return;
  const it=HOME_ITEMS.find(d=>d.id===id); if(!spend(it.cost)) return;
  state.inventory.push(id); toast(`${it.name} added to Lila's home!`,'gift'); confetti(); save(); render();
}
function buyAcc(id){
  if(state.ownedAcc.includes(id)){ state.accessory = state.accessory===id?null:id; save(); render(); return; }
  const it=ACC.find(a=>a.id===id); if(!spend(it.cost)) return;
  state.ownedAcc.push(id); state.accessory=id; toast(`Lila looks adorable in the ${it.name.toLowerCase()}!`,'gift'); confetti(); save(); render();
}
function buyPark(id){
  if(state.parkPlaced.includes(id)) return;
  const it=PARK.find(p=>p.id===id); if(!spend(it.cost)) return;
  state.parkPlaced.push(id); toast(`${it.name} planted in the park!`,'gift'); confetti(); save(); render();
}

/* ---------- feedback ---------- */
function buzz(){ try{ navigator.vibrate && navigator.vibrate(14); }catch(e){} }
let toastT;
function toast(msg,ic){
  const el=document.getElementById('toast');
  el.innerHTML=icon(ic||'sparkle')+`<span>${msg}</span>`;
  el.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('show'),2200);
}
function celebratePop(){
  const st=document.querySelector('.lila-stage'); if(!st) return;
  const img=st.querySelector('img.lila'); if(!img) return; const was=img.getAttribute('src');
  img.src='assets/lila/celebrate.png'; st.classList.add('pop');
  setTimeout(()=>{ st.classList.remove('pop'); if(!isPerfectToday()) img.src=was; }, 1100);
}
function isPerfectToday(){ const a=activeHabits(); return a.length>0 && a.every(h=>countFor(today(),h.id)>=1); }
function confetti(){
  const cols=['#F2A0BC','#C7B4EC','#8FD7BC','#F6D27A','#FBA7C6'];
  for(let i=0;i<26;i++){ const c=document.createElement('div'); c.className='confetti';
    c.style.background=cols[i%cols.length]; c.style.left=(10+Math.random()*80)+'%'; c.style.top='-20px';
    document.body.appendChild(c);
    c.animate([{transform:'translateY(0) rotate(0)',opacity:1},
               {transform:`translateY(${window.innerHeight+40}px) rotate(${360+Math.random()*360}deg)`,opacity:.9}],
              {duration:1400+Math.random()*900,easing:'cubic-bezier(.3,.6,.5,1)'}).onfinish=()=>c.remove(); }
}

/* ---------- Lila figure (with accessory) ---------- */
function lilaFig(pose,height,cls=''){
  const acc = (pose==='hero' && state.accessory) ? ACC.find(a=>a.id===state.accessory) : null;
  return `<div class="lilawrap ${cls}" style="height:${height}px">
    <img class="lila" src="assets/lila/${pose}.png" alt="Lila" style="height:${height}px">
    ${acc?`<div class="acc" style="${acc.pos}">${acc.svg}</div>`:''}</div>`;
}

/* ---------- render ---------- */
const app = () => document.getElementById('app');
function render(){
  const v={today:viewToday, world:viewWorld, journey:viewJourney, habits:viewHabits}[state.tab]||viewToday;
  app().innerHTML=v();
  document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active', b.dataset.id===state.tab));
}
function header(){
  return `<div class="topbar">
    <div class="greet"><div class="hi">Hi there</div><div class="nm">${esc(state.name)}</div></div>
    <div class="chips">
      <div class="chip flame">${icon('flame')}${displayStreak()}</div>
      <div class="chip spark">${icon('sparkle')}${state.sparks}</div>
    </div></div>`;
}

/* ----- Today ----- */
function viewToday(){
  const li=levelInfo(state.lifetime), act=activeHabits();
  const done=act.filter(h=>countFor(today(),h.id)>=1).length;
  const perfect=isPerfectToday(), pose=perfect?'celebrate':'hero';
  const rows = act.map(h=>{
    const c=countFor(today(),h.id), t=TINT[h.color]||TINT.pink, isDone=c>=1;
    const right = h.repeatable
      ? `<div class="rep"><button data-act="dec" data-id="${h.id}" ${c<=0?'style="opacity:.35"':''}>−</button>
           <span class="cnt">×${c}</span><button data-act="tap" data-id="${h.id}">+</button></div>`
      : `<div class="check">${icon('check')}</div>`;
    return `<div class="habit ${isDone?'done':''}" ${h.repeatable?'':`data-act="tap" data-id="${h.id}"`}>
      <div class="ic" style="background:${t.bg};color:${t.fg}">${icon(h.icon)}</div>
      <div class="tx"><b>${esc(h.name)}</b><span>${esc(h.sub)}</span></div>
      <div class="val">${icon('sparkle')}${h.sparks}</div>${right}</div>`;
  }).join('');
  let banner;
  if(perfect){ banner=`<div class="banner perfect">${icon('sparkle')}<div>Perfect day — every habit done!<small>Lila is so proud of you</small></div></div>`; }
  else { const next=cheapestLocked();
    banner = next ? `<div class="banner next">${icon('gift')}<div>Next for Lila: ${esc(next.name)}<small>${Math.max(0,next.cost-state.sparks)} more sparks to go</small></div></div>`
                  : `<div class="banner next">${icon('star')}<div>You've unlocked everything!<small>Lila's world is amazing</small></div></div>`; }
  return header()+`
    <div class="lila-card">
      <div class="lila-stage">${lilaFig(pose,200)}</div>
      <div class="lila-name"><b>Lila</b><span class="lvl">Lv ${li.level}</span>
        <div class="xpbar"><i style="width:${li.pct}%"></i></div></div>
    </div>
    <div class="sec"><h2>Today</h2><span class="meta">${done} of ${act.length} done</span></div>
    <div class="habits">${rows||emptyHabits()}</div>
    ${banner}`;
}
function emptyHabits(){ return `<div class="banner next" style="margin:8px 0">${icon('heart')}<div>No habits picked yet<small>Tap "Habits" below to choose a few</small></div></div>`; }
function cheapestLocked(){
  const locked=[...HOME_ITEMS.filter(d=>!state.inventory.includes(d.id)),
                ...THEMES.filter(t=>!state.ownedThemes.includes(t.id)),
                ...ACC.filter(a=>!state.ownedAcc.includes(a.id)),
                ...PARK.filter(p=>!state.parkPlaced.includes(p.id))].sort((a,b)=>a.cost-b.cost);
  return locked[0];
}

/* ----- World (tap-to-travel) ----- */
function viewWorld(){
  switch(state.location){
    case 'home': return worldHome();
    case 'boutique': return shopScreen('Boutique','acc',ACC,state.ownedAcc);
    case 'furniture': return furnitureScreen();
    case 'cafe': return shopScreen('Café','home',CAFE,state.inventory);
    case 'park': return worldPark();
    default: return worldMap();
  }
}
function spot(id,label,style){
  return `<button class="spot" data-act="goto" data-id="${id}" style="${style}"><span>${label}</span></button>`;
}
function worldMap(){
  return header()+`
    <div class="sec"><h2>Lila's world</h2><span class="meta">tap a place to visit</span></div>
    <div class="worldwrap"><div class="worldmap">
      <img src="assets/lila/world.png" alt="Lila's town">
      ${spot('home','Home','left:36%;top:18%;width:30%;height:34%')}
      ${spot('boutique','Boutique','left:11%;top:30%;width:24%;height:26%')}
      ${spot('cafe','Café','left:60%;top:36%;width:31%;height:26%')}
      ${spot('furniture','Furniture','left:36%;top:54%;width:30%;height:16%')}
      ${spot('park','Park','left:10%;top:60%;width:35%;height:24%')}
    </div></div>
    <div class="hintline">${icon('sparkle')} You have <b>${state.sparks}</b> sparks to spend</div>`;
}
function locHeader(title){
  return `<div class="locbar"><button class="back" data-act="backmap">${icon('back')} Town</button>
    <div class="chip spark">${icon('sparkle')}${state.sparks}</div></div>
    <div class="sec"><h2>${title}</h2></div>`;
}
function shopCard(item,owned,activeFlag,preview){
  const cls = owned ? (activeFlag?'owned':'') : (state.sparks<item.cost?'cant':'');
  const label = owned ? (activeFlag!==undefined ? (activeFlag?'Wearing':'Wear') : 'Owned') : icon('sparkle')+' '+item.cost;
  const act = item._act;
  return `<div class="shopcard"><div class="pre">${preview}</div><b>${esc(item.name)}</b>
    <button class="buy ${cls}" data-act="${act}" data-id="${item.id}">${label}</button></div>`;
}
function shopScreen(title,kind,list,ownedArr){
  const act = kind==='acc'?'buyacc':'buyhome';
  const top = kind==='acc'
    ? `<div class="shoplila">${lilaFig('hero',150)}</div>` : '';
  const cards=list.map(it=>{ it._act=act;
    const owned=ownedArr.includes(it.id);
    const activeFlag = kind==='acc' ? (state.accessory===it.id) : undefined;
    return shopCard(it,owned,activeFlag, it.svg.replace('width="100%"','width="62"')); }).join('');
  return locHeader(title)+top+`<div class="shop">${cards}</div><div style="height:8px"></div>`;
}
function furnitureScreen(){
  const themes=THEMES.map(t=>{ const owned=state.ownedThemes.includes(t.id), active=state.theme===t.id;
    return `<div class="shopcard"><div class="pre"><div class="swatch" style="background:${t.wall}"></div></div>
      <b>${t.name}</b><button class="buy ${owned?'owned':(state.sparks<t.cost?'cant':'')}" data-act="buytheme" data-id="${t.id}">
      ${active?'Active':owned?'Equip':icon('sparkle')+' '+t.cost}</button></div>`; }).join('');
  const furn=DECOR.map(d=>{ d._act='buyhome'; return shopCard(d,state.inventory.includes(d.id),undefined,d.svg.replace('width="100%"','width="62"')); }).join('');
  return locHeader('Furniture shop')+
    `<div class="subsec">Room themes</div><div class="shop">${themes}</div>
     <div class="subsec">Furniture</div><div class="shop">${furn}</div><div style="height:8px"></div>`;
}
function worldHome(){
  const th=THEMES.find(t=>t.id===state.theme)||THEMES[0];
  const items=HOME_ITEMS.filter(d=>state.inventory.includes(d.id)).map(d=>`<div class="item" style="${d.pos}">${d.svg}</div>`).join('');
  const wardrobe = state.ownedAcc.length ? `<div class="subsec">Lila's wardrobe</div>
    <div class="wardrobe"><button class="wbtn ${!state.accessory?'sel':''}" data-act="equipacc" data-id="">${icon('paw')}</button>${
      state.ownedAcc.map(id=>{ const a=ACC.find(x=>x.id===id);
      return `<button class="wbtn ${state.accessory===id?'sel':''}" data-act="equipacc" data-id="${id}">${a.svg.replace('width="100%"','width="34"')}</button>`; }).join('')}</div>` : '';
  return locHeader("Lila's home")+`
    <div class="room-wrap"><div class="room">
      <div style="position:absolute;inset:0;background:${th.wall}"></div>
      <div class="floor" style="background:${th.floor}"></div>
      ${items}
      <div class="roomlila">${lilaFig('hero',180)}</div>
    </div></div>${wardrobe}
    <div class="hintline">${icon('gift')} Visit the shops in town to make Lila's home cozier</div>
    <div style="height:8px"></div>`;
}
function worldPark(){
  const items=PARK.filter(p=>state.parkPlaced.includes(p.id)).map(p=>`<div class="item" style="${p.pos}">${p.svg}</div>`).join('');
  const walk=state.habits.find(h=>h.id==='walk');
  const cards=PARK.map(p=>{ p._act='buypark'; return shopCard(p,state.parkPlaced.includes(p.id),undefined,p.svg.replace('width="100%"','width="58"')); }).join('');
  return locHeader('Park & garden')+`
    <div class="room-wrap"><div class="room park">
      <div style="position:absolute;inset:0;background:linear-gradient(180deg,#CFEFDD,#BCE6CF)"></div>
      <div class="floor" style="background:#A9DCC0"></div>
      ${items}
      <div class="roomlila">${lilaFig('hero',150)}</div>
    </div></div>
    <button class="walkbtn" data-act="walk">${icon('walk')} Take Lila for a walk <span>+${walk?walk.sparks:12} ✦</span></button>
    <div class="subsec">Plant something pretty</div>
    <div class="shop">${cards}</div><div style="height:8px"></div>`;
}

/* ----- Journey ----- */
function viewJourney(){
  const names=['S','M','T','W','T','F','S']; let cells='';
  for(let i=6;i>=0;i--){ const d=shiftDay(today(),-i), day=state.log[d];
    const act=activeHabits().length;
    const score=day?Object.values(day.counts).filter(n=>n>=1).length:0;
    const win=day&&score>=Math.min(3,Math.max(1,act));
    const dt=new Date(d+'T00:00:00');
    cells+=`<div class="d"><small>${names[dt.getDay()]}</small><div class="dot ${win?'win':''} ${i===0?'today':''}">${win?icon('check'):dt.getDate()}</div></div>`; }
  const totalChecks=Object.values(state.log).reduce((a,day)=>a+Object.values(day.counts).reduce((x,n)=>x+n,0),0);
  const li=levelInfo(state.lifetime);
  const badges=BADGES.map(b=>{ const got=b.test(state), t=TINT[b.color];
    return `<div class="badge ${got?'':'locked'}"><div class="em" style="background:${got?t.bg:'#EFE5DE'};color:${got?t.fg:'#B7A6AE'}">${icon(got?b.icon:'lock')}</div><small>${b.name}</small></div>`; }).join('');
  return header()+`
    <div class="sec"><h2>This week</h2></div>
    <div class="cal">${cells}</div>
    <div class="stats">
      <div class="stat"><div class="n">${displayStreak()}</div><div class="l">Day streak${state.streak.freezes?` · ${state.streak.freezes} ❄`:''}</div></div>
      <div class="stat"><div class="n">${state.streak.best}</div><div class="l">Best streak</div></div>
      <div class="stat"><div class="n">${state.lifetime}</div><div class="l">Sparks earned</div></div>
      <div class="stat"><div class="n">${totalChecks}</div><div class="l">Habits ticked</div></div>
    </div>
    <div class="sec"><h2>Lila's badges</h2><span class="meta">Lv ${li.level}</span></div>
    <div class="badges">${badges}</div><div style="height:8px"></div>`;
}

/* ----- Habits ----- */
function viewHabits(){
  const rows=state.habits.map(h=>{ const t=TINT[h.color]||TINT.pink;
    return `<div class="erow ${h.active?'':'off'}">
      <div class="ic" style="width:38px;height:38px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:${t.bg};color:${t.fg}">${icon(h.icon)}</div>
      <div class="tx" ${h.builtin?'':`data-act="edit" data-id="${h.id}"`}>
        <b>${esc(h.name)} ${h.builtin?'':icon('pencil','style="width:13px;height:13px;vertical-align:-1px;opacity:.5"')}</b>
        <span>${esc(h.sub)} · ${h.sparks} sparks${h.repeatable?' · repeatable':''}</span></div>
      <div class="toggle ${h.active?'on':''}" data-act="toggle" data-id="${h.id}"><i></i></div></div>`; }).join('');
  return header()+`
    <div class="sec"><h2>Your habits</h2><span class="meta">${activeHabits().length} active</span></div>
    <p class="note">Turn habits on or off any time. You can always add your own too.</p>
    <div class="edit">${rows}</div>
    <button class="addbtn" data-act="add">${icon('plus')} Add my own habit</button><div style="height:8px"></div>`;
}

/* ---------- add / edit sheet ---------- */
let sheetEditId=null, sheetIcon='star';
function openSheet(id){
  sheetEditId=id; const h=id?state.habits.find(x=>x.id===id):null; sheetIcon=h?h.icon:'star';
  const picks=['star','heart','leaf','droplet','sun','moon','barbell','walk','apple','bolt','shoe','sparkle'];
  const scrim=document.getElementById('scrim');
  scrim.innerHTML=`<div class="sheet"><h3>${h?'Edit habit':'New habit'}</h3>
    <div class="field"><label>Name</label><input id="f-name" maxlength="28" placeholder="e.g. Stretch break" value="${h?esc(h.name):''}"></div>
    <div class="field"><label>Little note</label><input id="f-sub" maxlength="40" placeholder="e.g. 5 minutes of stretching" value="${h?esc(h.sub):''}"></div>
    <div class="field"><label>Pick an icon</label><div class="iconpick" id="f-icons">
      ${picks.map(p=>`<button data-act="picon" data-id="${p}" class="${p===sheetIcon?'sel':''}">${icon(p)}</button>`).join('')}</div></div>
    <div class="row">
      ${h&&!h.builtin?`<button class="cancel" data-act="delhabit" data-id="${id}" style="flex:.6;color:var(--pink-deep)">Delete</button>`:''}
      <button class="cancel" data-act="closesheet">Cancel</button>
      <button class="save" data-act="savehabit">Save</button></div></div>`;
  scrim.classList.add('show');
}
function closeSheet(){ const s=document.getElementById('scrim'); s.classList.remove('show'); setTimeout(()=>s.innerHTML='',250); }
function saveHabit(){
  const name=document.getElementById('f-name').value.trim()||'My habit';
  const sub=document.getElementById('f-sub').value.trim()||'A healthy little win';
  if(sheetEditId){ const h=state.habits.find(x=>x.id===sheetEditId); h.name=name; h.sub=sub; h.icon=sheetIcon; }
  else state.habits.push({id:'c'+Date.now(),name,sub,icon:sheetIcon,color:'pink',sparks:10,repeatable:false,active:true,builtin:false});
  closeSheet(); save(); render();
}
function delHabit(id){ state.habits=state.habits.filter(h=>h.id!==id); closeSheet(); save(); render(); }

/* ---------- events ---------- */
function handle(a,id){
  switch(a){
    case 'nav': state.tab=id; if(id==='world') state.location='map'; render(); window.scrollTo(0,0); break;
    case 'goto': state.location=id; render(); window.scrollTo(0,0); break;
    case 'backmap': state.location='map'; render(); window.scrollTo(0,0); break;
    case 'tap': tapHabit(state.habits.find(h=>h.id===id)); break;
    case 'dec': decHabit(state.habits.find(h=>h.id===id)); break;
    case 'buytheme': buyTheme(id); break;
    case 'buyhome': buyHome(id); break;
    case 'buyacc': buyAcc(id); break;
    case 'equipacc': state.accessory = id||null; save(); render(); break;
    case 'buypark': buyPark(id); break;
    case 'walk': { const w=state.habits.find(h=>h.id==='walk'); if(w&&w.active){ tapHabit(w); toast('Lovely walk with Lila!','walk'); } else toast('Turn on "Move after a meal" in Habits','heart'); break; }
    case 'toggle': { const h=state.habits.find(x=>x.id===id); h.active=!h.active; save(); render(); break; }
    case 'edit': openSheet(id); break;
    case 'add': openSheet(null); break;
    case 'picon': sheetIcon=id; document.querySelectorAll('#f-icons button').forEach(b=>b.classList.toggle('sel',b.dataset.id===id)); break;
    case 'savehabit': saveHabit(); break;
    case 'delhabit': delHabit(id); break;
    case 'closesheet': closeSheet(); break;
  }
}
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
document.addEventListener('click', e=>{ const t=e.target.closest('[data-act]'); if(!t) return; handle(t.dataset.act, t.dataset.id); });
document.addEventListener('click', e=>{ if(e.target.id==='scrim') closeSheet(); });

/* ---------- boot ---------- */
load();
if(!localStorage.getItem(KEY)) save();
render();
if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
