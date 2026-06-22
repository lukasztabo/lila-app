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
// przysmaki z kawiarni — jednorazowe, podnoszą przyjaźń + kolekcję
const TREATS=[
  {id:'cupcake',name:'Babeczka',cost:25,bond:5,set:'treats',svg:'<svg viewBox="0 0 40 50" width="100%"><path d="M8 22h24l-3 24H11z" fill="#F4D9A6"/><path d="M8 23c0-7 5-12 12-12s12 5 12 12z" fill="#F7B6CE"/><circle cx="20" cy="9" r="3" fill="#E2607F"/></svg>'},
  {id:'smoothie',name:'Owocowe smoothie',cost:22,bond:5,set:'treats',svg:'<svg viewBox="0 0 30 52" width="100%"><path d="M7 15h16l-2 32H9z" fill="#F2A0BC"/><rect x="6" y="11" width="18" height="5" rx="2" fill="#fff"/><rect x="18" y="2" width="3" height="13" fill="#9FD9BE"/><circle cx="13" cy="9" r="2.2" fill="#fff"/></svg>'},
  {id:'icecream',name:'Lody',cost:28,bond:6,set:'treats',svg:'<svg viewBox="0 0 28 56" width="100%"><path d="M9 26l5 28 5-28z" fill="#F4D9A6"/><circle cx="14" cy="18" r="9" fill="#C7B4EC"/><circle cx="14" cy="11" r="7" fill="#F7B6CE"/></svg>'},
  {id:'fruitbowl',name:'Miska owoców',cost:30,bond:6,set:'treats',svg:'<svg viewBox="0 0 50 38" width="100%"><circle cx="16" cy="15" r="8" fill="#F2A0BC"/><circle cx="32" cy="13" r="8" fill="#9FD9BE"/><circle cx="25" cy="19" r="8" fill="#F6D27A"/><path d="M6 19h38l-4 15H10z" fill="#E7C9B0"/></svg>'},
  {id:'pretzel',name:'Miękki precel',cost:26,bond:5,set:'treats',svg:'<svg viewBox="0 0 44 44" width="100%"><path d="M10 30c-6-6-2-16 6-16s14 8 8 14-14 6-18-2c-3-6 2-12 8-12" fill="none" stroke="#D9A05B" stroke-width="5" stroke-linecap="round"/></svg>'}
];
// akcesoria — noszone przez Lilę (jedno naraz). sklep: boutique | spa
const ACC=[
  {id:'bow',name:'Różowa kokarda',cost:40,set:'wardrobe',shop:'boutique',pos:'top:0%;left:50%;transform:translateX(-50%);width:30%',svg:'<svg viewBox="0 0 40 24" width="100%"><path d="M20 12c-4-9-16-7-16 0s12 9 16 0z" fill="#F2A0BC"/><path d="M20 12c4-9 16-7 16 0s-12 9-16 0z" fill="#F2A0BC"/><circle cx="20" cy="12" r="4" fill="#E2607F"/></svg>'},
  {id:'crown',name:'Wianek z kwiatów',cost:90,set:'wardrobe',shop:'boutique',pos:'top:-4%;left:50%;transform:translateX(-50%);width:48%',svg:'<svg viewBox="0 0 84 26" width="100%"><path d="M6 22q36 -16 72 0" stroke="#8FD7BC" fill="none" stroke-width="3"/>'+[[16,'#F2A0BC'],[33,'#F6D27A'],[51,'#C7B4EC'],[68,'#F2A0BC']].map(([x,c])=>`<circle cx="${x}" cy="11" r="6.5" fill="${c}"/><circle cx="${x}" cy="11" r="2.5" fill="#fff"/>`).join('')+'</svg>'},
  {id:'clip',name:'Spinka-gwiazdka',cost:35,set:'wardrobe',shop:'boutique',pos:'top:6%;left:20%;width:18%',svg:'<svg viewBox="0 0 24 24" width="100%"><path d="M12 2l3 6 6 1-4.5 4.5 1 6L12 17l-5.5 2.5 1-6L4 9l6-1z" fill="#F6D27A"/></svg>'},
  {id:'shades',name:'Okulary serduszka',cost:70,set:'wardrobe',shop:'boutique',pos:'top:22%;left:50%;transform:translateX(-50%);width:44%',svg:'<svg viewBox="0 0 60 24" width="100%"><path d="M26 7h8" stroke="#E2607F" stroke-width="3"/><path d="M15 6c-5-3-11 2-7 7 2 3 7 6 7 6s5-3 7-6c4-5-2-10-7-7z" fill="#E2607F"/><path d="M45 6c-5-3-11 2-7 7 2 3 7 6 7 6s5-3 7-6c4-5-2-10-7-7z" fill="#E2607F"/></svg>'},
  {id:'party',name:'Czapeczka na imprezę',cost:60,set:'wardrobe',shop:'boutique',pos:'top:-22%;left:52%;transform:translateX(-50%);width:26%',svg:'<svg viewBox="0 0 30 40" width="100%"><path d="M15 2l10 32H5z" fill="#C7B4EC"/><circle cx="15" cy="3" r="3" fill="#F6D27A"/></svg>'},
  {id:'tiara',name:'Tiara',cost:120,set:'wardrobe',shop:'boutique',pos:'top:2%;left:50%;transform:translateX(-50%);width:34%',svg:'<svg viewBox="0 0 50 22" width="100%"><path d="M5 20l4-13 8 9 8-13 8 13 8-9 4 13z" fill="#F6D27A"/><circle cx="25" cy="6" r="3" fill="#F2A0BC"/></svg>'},
  {id:'sunhat',name:'Kapelusz na słońce',cost:80,set:'wardrobe',shop:'spa',pos:'top:-8%;left:50%;transform:translateX(-50%);width:54%',svg:'<svg viewBox="0 0 80 30" width="100%"><ellipse cx="40" cy="22" rx="38" ry="7" fill="#F6D27A"/><path d="M22 22c0-12 8-18 18-18s18 6 18 18z" fill="#FBE3A0"/><path d="M22 22h36" stroke="#E2607F" stroke-width="3"/></svg>'},
  {id:'scarf',name:'Przytulny szalik',cost:75,set:'wardrobe',shop:'spa',pos:'top:46%;left:50%;transform:translateX(-50%);width:46%',svg:'<svg viewBox="0 0 60 30" width="100%"><path d="M6 6q24 14 48 0v6q-24 14-48 0z" fill="#9FD9BE"/><path d="M44 12l4 16h-8z" fill="#7FBE9C"/></svg>'}
];
// nasiona z ogrodu → kwiaty (na stałe w parku)
const SEEDS=[
  {id:'tulip',name:'Tulipan',cost:30,set:'garden',bloom:'<svg viewBox="0 0 40 50" width="100%"><path d="M10 50V24M20 50V20M30 50V24" stroke="#5FB894" stroke-width="3"/><path d="M10 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#F2A0BC"/><path d="M20 20c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#E2607F"/><path d="M30 24c-4 0-6-4-4-8 2 2 4 2 4 2s2 0 4-2c2 4 0 8-4 8z" fill="#C7B4EC"/></svg>'},
  {id:'sunflower',name:'Słonecznik',cost:35,set:'garden',bloom:'<svg viewBox="0 0 44 60" width="100%"><path d="M22 60V28" stroke="#5FB894" stroke-width="3"/>'+[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="22" cy="16" rx="4" ry="9" fill="#F6D27A" transform="rotate(${a} 22 16)"/>`).join('')+'<circle cx="22" cy="16" r="7" fill="#C77E12"/></svg>'},
  {id:'rose',name:'Róża',cost:40,set:'garden',bloom:'<svg viewBox="0 0 40 54" width="100%"><path d="M20 54V28" stroke="#5FB894" stroke-width="3"/><circle cx="20" cy="18" r="11" fill="#E2607F"/><circle cx="20" cy="18" r="6" fill="#F2A0BC"/><circle cx="20" cy="18" r="2.5" fill="#fff"/></svg>'}
];
const SETS={
  treats:{name:'Słodkie przysmaki',items:TREATS},
  wardrobe:{name:'Szafa Lili',items:ACC},
  home:{name:'Domowe akcenty',items:DECOR},
  garden:{name:'Kwiaty z ogrodu',items:SEEDS}
};
const BADGES=[
  {id:'first',name:'Pierwszy krok',icon:'paw',color:'pink',test:s=>s.lifetime>=1},
  {id:'s7',name:'Cały tydzień',icon:'flame',color:'amber',test:s=>s.streak.best>=7},
  {id:'bond5',name:'Najlepsze przyjaciółki',icon:'heart',color:'pink',test:s=>bondInfo(s.bond.xp).level>=5},
  {id:'sp100',name:'100 iskierek',icon:'sparkle',color:'lav',test:s=>s.lifetime>=100},
  {id:'lvl5',name:'Lila poz. 5',icon:'star',color:'pink',test:s=>levelInfo(s.lifetime).level>=5},
  {id:'spa',name:'Spa odblokowane',icon:'sparkles2',color:'mint',test:s=>s.places.includes('spa')},
  {id:'s30',name:'Cały miesiąc',icon:'trophy',color:'amber',test:s=>s.streak.best>=30},
  {id:'green',name:'Zielony kciuk',icon:'sprout',color:'green',test:s=>s.gardenHarvested.length>=3},
  {id:'collector',name:'Kolekcjonerka',icon:'gift',color:'lav',test:s=>['treats','wardrobe','home','garden'].some(k=>setDone(k,s))}
];

const PERFECT_BONUS=15, SPA_COST_HEARTS=8, STREAK_HEART_MILES=[3,7,14,30,60,100];
const LILA_NOTES=['Uwielbiam spędzać z Tobą dzień 🤍','Sprawiasz, że jestem taka szczęśliwa!','Najlepsze przyjaciółki na zawsze?','Zawsze w Ciebie wierzę.','Dziś było z Tobą cudownie.','Dziękuję, że się mną opiekujesz!'];

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
function freshState(){return{v:3,name:'przyjaciółko',createdAt:today(),sparks:0,lifetime:0,hearts:0,
  bond:{xp:0},streak:{count:0,best:0,lastWin:null,freezes:1},
  habits:JSON.parse(JSON.stringify(PRESET_HABITS)),log:{},
  ownedThemes:['cream'],theme:'cream',inventory:[],ownedAcc:[],accessory:null,
  treatsGiven:[],garden:[null,null,null],gardenHarvested:[],
  places:['home','boutique','furniture','cafe','park'],journal:[],lastVisit:null,townBeats:[],
  tab:'today',location:'map'};}
function load(){
  try{const r=localStorage.getItem(KEY);state=r?JSON.parse(r):freshState();}catch(e){state=freshState();}
  const f=freshState(); for(const k in f) if(state[k]===undefined) state[k]=f[k];
  if(!state.bond) state.bond={xp:0};
  PRESET_HABITS.forEach(p=>{const ex=state.habits.find(h=>h.id===p.id);if(!ex)state.habits.push(JSON.parse(JSON.stringify(p)));else{ex.name=p.name;ex.sub=p.sub;}});
}
function save(){localStorage.setItem(KEY,JSON.stringify(state));}

/* ===== pochodne ===== */
const activeHabits=()=>state.habits.filter(h=>h.active);
function getDay(d){if(!state.log[d])state.log[d]={counts:{},perfect:false,flags:{}};if(!state.log[d].flags)state.log[d].flags={};return state.log[d];}
const countFor=(d,id)=>(state.log[d]?.counts[id])||0;
const dailyGoal=()=>Math.min(3,Math.max(1,activeHabits().length));
function levelInfo(lt){let need=0,lvl=1,step=60;while(lt>=need+step){need+=step;lvl++;step=Math.round(step*1.25);}return{level:lvl,pct:Math.min(100,Math.round((lt-need)/step*100))};}
function bondInfo(xp){let need=0,lvl=1,step=40;while(xp>=need+step){need+=step;lvl++;step=Math.round(step*1.2);}return{level:lvl,pct:Math.min(100,Math.round((xp-need)/step*100))};}
function displayStreak(){const s=state.streak;if(!s.lastWin)return 0;const g=daysBetween(s.lastWin,today());if(g<=1)return s.count;if(g-1<=s.freezes)return s.count;return 0;}
function setOwned(key){return{treats:state.treatsGiven,wardrobe:state.ownedAcc,home:state.inventory,garden:state.gardenHarvested}[key]||[];}
function setDone(key,s){const owned={treats:s.treatsGiven,wardrobe:s.ownedAcc,home:s.inventory,garden:s.gardenHarvested}[key]||[];return owned.length>=SETS[key].items.length;}

/* ===== nagrody ===== */
function addSparks(n){const b=levelInfo(state.lifetime).level;state.sparks+=n;state.lifetime+=n;const a=levelInfo(state.lifetime).level;if(a>b){addHearts(1);addMemory('star',`Lila urosła do poziomu ${a}!`);setTimeout(()=>{toast(`Lila urosła do poziomu ${a}! +1 serduszko`,'star');confetti();},700);}}
function addHearts(n){state.hearts+=n;}
function addBond(n){const b=bondInfo(state.bond.xp).level;state.bond.xp+=n;const a=bondInfo(state.bond.xp).level;if(a>b){addHearts(1);addMemory('heart',`Twoja przyjaźń z Lilą osiągnęła poziom ${a}`);setTimeout(()=>{toast(`Poziom przyjaźni ${a}! +1 serduszko`,'heart');confetti();},600);}}
function addMemory(ic,text){state.journal.unshift({ic,text,date:today()});if(state.journal.length>80)state.journal.pop();}

/* ===== Akt 1: budzące się miasteczko ===== */
const TOWN_TARGET=1200;
function wakePct(){return Math.min(100,Math.round(state.lifetime/TOWN_TARGET*100));}
const TOWN_BEATS=[
  {at:0,id:'arrive',label:'Przybycie',hearts:0,mem:'Lila przybyła do uśpionego miasteczka',toast:'Miasteczko śpi pod szarą mgłą… Twoje nawyki niosą Blask, który je obudzi 🤍'},
  {at:20,id:'fountain',label:'Fontanna się budzi',hearts:1,mem:'Fontanna w miasteczku się obudziła',toast:'Fontanna budzi się! ✨ +1 serduszko'},
  {at:45,id:'home',label:'Domek Lili rozświetla się',hearts:1,mem:'Domek Lili się rozświetlił',toast:'Domek Lili rozświetla się 🏡 +1 serduszko'},
  {at:70,id:'poppy',label:'Ktoś się budzi…',hearts:1,mem:'Ktoś zaczął się budzić w miasteczku…',toast:'Ktoś porusza się w miasteczku… kto to? +1 serduszko'},
  {at:100,id:'festival',label:'Świetlikowy Festyn',hearts:3,mem:'Świetlikowy Festyn — całe miasteczko obudzone!',toast:'🎉 Świetlikowy Festyn! Całe miasteczko się obudziło! +3 serduszka'}
];
function checkTownBeats(){const p=wakePct();let n=0;TOWN_BEATS.forEach(b=>{if(p>=b.at&&!state.townBeats.includes(b.id)){state.townBeats.push(b.id);if(b.hearts)addHearts(b.hearts);addMemory('sparkles2',b.mem);const tx=b.toast,delay=n?1500:500;setTimeout(()=>{toast(tx,'sparkles2');confetti();},delay);n++;}});if(n)save();}
function registerWin(d){const s=state.streak;if(s.lastWin===d)return;if(!s.lastWin)s.count=1;else{const g=daysBetween(s.lastWin,d);if(g===1)s.count++;else if(g>1){const m=g-1;if(s.freezes>=m){s.freezes-=m;s.count++;toast('Lila uratowała Twoją serię','flame');}else s.count=1;}}s.lastWin=d;const wasBest=s.best;s.count>s.best&&(s.best=s.count);if(s.best>wasBest&&STREAK_HEART_MILES.includes(s.best)){addHearts(2);addMemory('flame',`Seria ${s.best} dni! Super.`);setTimeout(()=>toast(`Seria ${s.best} dni! +2 serduszka`,'flame'),900);}if(s.count>0&&s.count%5===0)s.freezes=Math.min(3,s.freezes+1);}
function recompute(){const t=today(),day=getDay(t),act=activeHabits();const done=act.filter(h=>countFor(t,h.id)>=1).length;if(done>=dailyGoal()&&state.streak.lastWin!==t)registerWin(t);if(act.length>0&&done===act.length&&!day.perfect){day.perfect=true;addSparks(PERFECT_BONUS);addHearts(1);addBond(4);addMemory('sparkle','Idealny dzień — wszystkie nawyki zrobione!');setTimeout(()=>{toast(`Idealny dzień! +${PERFECT_BONUS} iskierek +1 serduszko`,'sparkle');confetti();},250);}checkTownBeats();save();}
function tapHabit(h){const t=today(),day=getDay(t),cur=countFor(t,h.id);if(h.repeatable){if(cur>=6)return;day.counts[h.id]=cur+1;addSparks(h.sparks);}else{if(cur>=1){day.counts[h.id]=0;state.sparks=Math.max(0,state.sparks-h.sparks);state.lifetime=Math.max(0,state.lifetime-h.sparks);}else{day.counts[h.id]=1;addSparks(h.sparks);if(state.journal.length===0)addMemory('paw','Twój pierwszy nawyk z Lilą 🐾');}}buzz();celebratePop();recompute();render();}
function decHabit(h){const t=today(),day=getDay(t),cur=countFor(t,h.id);if(cur<=0)return;day.counts[h.id]=cur-1;state.sparks=Math.max(0,state.sparks-h.sparks);state.lifetime=Math.max(0,state.lifetime-h.sparks);save();render();}

/* ===== opieka ===== */
function petLila(){const day=getDay(today());const n=day.flags.pet||0;if(n>=5){toast('Lila czuje się dziś bardzo kochana 🤍','heart');return;}day.flags.pet=n+1;addBond(2);buzz();heartBurst();celebratePop();save();render();}
function giveTreat(it){if(!spend(it.cost))return;addBond(it.bond);const firstTime=!state.treatsGiven.includes(it.id);if(firstTime){state.treatsGiven.push(it.id);addMemory('gift',`Podzieliłaś się z Lilą: ${it.name.toLowerCase()}`);checkSet('treats');}toast(`Lila uwielbia ${it.name.toLowerCase()}! +${it.bond} przyjaźni`,'heart');confetti();save();render();}

/* ===== kupowanie ===== */
function spend(c){if(state.sparks<c){toast('Działaj dalej — już prawie!','sparkle');return false;}state.sparks-=c;return true;}
function spendHearts(c){if(state.hearts<c){toast(`Zdobądź jeszcze ${c-state.hearts} serduszek na to`,'heart');return false;}state.hearts-=c;return true;}
function checkSet(key){if(setDone(key,state)){addHearts(3);addMemory('trophy',`Ukończona kolekcja: ${SETS[key].name}! +3 serduszka`);setTimeout(()=>{toast(`Kolekcja „${SETS[key].name}" ukończona! +3 serduszka`,'trophy');confetti();},500);}}
function buyTheme(id){if(state.ownedThemes.includes(id)){state.theme=id;save();render();return;}const t=THEMES.find(x=>x.id===id);if(!spend(t.cost))return;state.ownedThemes.push(id);state.theme=id;toast(`Pokój ${t.name.toLowerCase()} odblokowany!`,'gift');confetti();save();render();}
function buyHome(id){if(state.inventory.includes(id))return;const it=DECOR.find(d=>d.id===id);if(!spend(it.cost))return;state.inventory.push(id);addMemory('home',`Do domu Lili trafił: ${it.name.toLowerCase()}`);toast(`Dodano: ${it.name.toLowerCase()}!`,'gift');confetti();checkSet('home');save();render();}
function buyAcc(id){if(state.ownedAcc.includes(id)){state.accessory=state.accessory===id?null:id;save();render();return;}const it=ACC.find(a=>a.id===id);if(!spend(it.cost))return;state.ownedAcc.push(id);state.accessory=id;addBond(3);addMemory('sparkle',`Lila ma nowy wygląd: ${it.name.toLowerCase()}`);toast(`Lili podoba się: ${it.name.toLowerCase()}!`,'gift');confetti();checkSet('wardrobe');save();render();}
function unlockPlace(id,cost){if(!spendHearts(cost))return;state.places.push(id);addMemory('sparkles2','Odblokowano Spa Lili w mieście!');toast('Spa Lili odblokowane!','sparkles2');confetti();state.location=id;save();render();}

/* ===== ogród ===== */
function plotStage(p){if(!p)return -1;const age=daysBetween(p.planted,today());return age<=0?0:age===1?1:age===2?2:3;}
function plantSeed(idx,seedId){const s=SEEDS.find(x=>x.id===seedId);if(!spend(s.cost))return;state.garden[idx]={seed:seedId,planted:today(),watered:today()};addMemory('sprout',`Zasadzono w ogrodzie: ${s.name.toLowerCase()}`);toast(`${s.name} zasadzony! Wracaj codziennie, by patrzeć, jak rośnie`,'sprout');closeSheet();save();render();}
function water(idx){const p=state.garden[idx];if(!p)return;if(p.watered===today()){toast('Już podlane dzisiaj 🤍','droplet');return;}p.watered=today();addBond(1);addSparks(2);buzz();toast('Podlane! +1 przyjaźni','droplet');save();render();}
function harvest(idx){const p=state.garden[idx];if(plotStage(p)<3)return;const s=SEEDS.find(x=>x.id===p.seed);addHearts(2);if(!state.gardenHarvested.includes(p.seed)){state.gardenHarvested.push(p.seed);addMemory('sprout',`Twój ${s.name.toLowerCase()} zakwitł! +2 serduszka`);checkSet('garden');}else addMemory('sprout',`Zebrano: ${s.name.toLowerCase()} +2 serduszka`);state.garden[idx]=null;toast(`${s.name} zakwitł! +2 serduszka`,'heart');confetti();save();render();}

/* ===== reakcje ===== */
function buzz(){try{navigator.vibrate&&navigator.vibrate(14);}catch(e){}}
let toastT;function toast(m,ic){const el=document.getElementById('toast');el.innerHTML=icon(ic||'sparkle')+`<span>${m}</span>`;el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>el.classList.remove('show'),2300);}
function celebratePop(){const st=document.querySelector('.lila-stage,.care-stage');if(!st)return;const img=st.querySelector('img.lila');if(!img)return;const was=img.getAttribute('src');img.src='assets/lila/celebrate.png';st.classList.add('pop');setTimeout(()=>{st.classList.remove('pop');if(!isPerfectToday())img.src=was;},1100);}
function isPerfectToday(){const a=activeHabits();return a.length>0&&a.every(h=>countFor(today(),h.id)>=1);}
function confetti(){const c=['#F2A0BC','#C7B4EC','#8FD7BC','#F6D27A','#FBA7C6'];for(let i=0;i<26;i++){const d=document.createElement('div');d.className='confetti';d.style.background=c[i%c.length];d.style.left=(10+Math.random()*80)+'%';d.style.top='-20px';document.body.appendChild(d);d.animate([{transform:'translateY(0) rotate(0)',opacity:1},{transform:`translateY(${innerHeight+40}px) rotate(${360+Math.random()*360}deg)`,opacity:.9}],{duration:1400+Math.random()*900,easing:'cubic-bezier(.3,.6,.5,1)'}).onfinish=()=>d.remove();}}
function heartBurst(){const st=document.querySelector('.lila-stage,.care-stage');if(!st)return;const r=st.getBoundingClientRect();for(let i=0;i<6;i++){const h=document.createElement('div');h.className='confetti';h.style.background='transparent';h.innerHTML='<svg viewBox="0 0 24 24" width="18" height="18" fill="#F2A0BC"><path d="M12 20s-7-4.5-7-10a3.6 3.6 0 0 1 7-1.6A3.6 3.6 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>';h.style.left=(r.left+r.width/2-9+(Math.random()*60-30))+'px';h.style.top=(r.top+r.height/2)+'px';document.body.appendChild(h);h.animate([{transform:'translateY(0) scale(.6)',opacity:1},{transform:'translateY(-90px) scale(1.1)',opacity:0}],{duration:1100,easing:'ease-out'}).onfinish=()=>h.remove();}}

/* ===== figurka Lili ===== */
function lilaFig(pose,height){const acc=(pose==='hero'&&state.accessory)?ACC.find(a=>a.id===state.accessory):null;return`<div class="lilawrap" style="height:${height}px"><img class="lila" src="assets/lila/${pose}.png" alt="Lila" style="height:${height}px">${acc?`<div class="acc" style="${acc.pos}">${acc.svg}</div>`:''}</div>`;}

/* ===== render ===== */
const app=()=>document.getElementById('app');
function render(){const v={today:viewToday,world:viewWorld,journey:viewJourney,habits:viewHabits}[state.tab]||viewToday;app().innerHTML=v();document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.id===state.tab));}
function header(){return`<div class="topbar">
    <div class="greet"><div class="hi">Cześć</div><div class="nm">${esc(state.name)}</div></div>
    <div class="chips"><div class="chip flame">${icon('flame')}${displayStreak()}</div><div class="chip heart">${icon('heart')}${state.hearts}</div><div class="chip spark">${icon('sparkle')}${state.sparks}</div></div></div>`;}

/* ----- Dzisiaj ----- */
function viewToday(){const li=levelInfo(state.lifetime),bi=bondInfo(state.bond.xp),act=activeHabits();
  const done=act.filter(h=>countFor(today(),h.id)>=1).length;
  const perfect=isPerfectToday(),pose=perfect?'celebrate':'hero';
  const note=LILA_NOTES[(bi.level+ new Date().getDay())%LILA_NOTES.length];
  const rows=act.map(h=>{const c=countFor(today(),h.id),t=TINT[h.color]||TINT.pink,isDone=c>=1;
    const right=h.repeatable?`<div class="rep"><button data-act="dec" data-id="${h.id}" ${c<=0?'style="opacity:.35"':''}>−</button><span class="cnt">×${c}</span><button data-act="tap" data-id="${h.id}">+</button></div>`:`<div class="check">${icon('check')}</div>`;
    return`<div class="habit ${isDone?'done':''}" ${h.repeatable?'':`data-act="tap" data-id="${h.id}"`}><div class="ic" style="background:${t.bg};color:${t.fg}">${icon(h.icon)}</div><div class="tx"><b>${esc(h.name)}</b><span>${esc(h.sub)}</span></div><div class="val">${icon('sparkle')}${h.sparks}</div>${right}</div>`;}).join('');
  let banner;if(perfect)banner=`<div class="banner perfect">${icon('sparkle')}<div>Idealny dzień — wszystko zrobione!<small>Lila jest z Ciebie taka dumna</small></div></div>`;
  else{const nx=cheapestLocked();banner=nx?`<div class="banner next">${icon('gift')}<div>Następne dla Lili: ${esc(nx.name)}<small>jeszcze ${Math.max(0,nx.cost-state.sparks)} iskierek</small></div></div>`:`<div class="banner next">${icon('star')}<div>Tyle już odkryłaś!<small>Świat Lili jest cudowny</small></div></div>`;}
  return header()+`
    <div class="lila-card">
      <div class="speech">${esc(note)}</div>
      <div class="lila-stage" data-act="pet" title="pogłaszcz Lilę">${lilaFig(pose,196)}</div>
      <div class="lila-name"><b>Lila</b><span class="lvl">Poz. ${li.level}</span><div class="xpbar"><i style="width:${li.pct}%"></i></div></div>
      <div class="bondrow">${icon('heart')}<div class="bondbar"><i style="width:${bi.pct}%"></i></div><span>Przyjaźń ${bi.level}</span></div>
      <div class="pethint">dotknij Lili, żeby ją przytulić 🤍</div>
    </div>
    <div class="sec"><h2>Dzisiaj</h2><span class="meta">${done} z ${act.length} zrobione</span></div>
    <div class="habits">${rows||emptyHabits()}</div>
    ${banner}`;}
function emptyHabits(){return`<div class="banner next" style="margin:8px 0">${icon('heart')}<div>Nie masz jeszcze nawyków<small>Kliknij „Nawyki" na dole, aby wybrać</small></div></div>`;}
function cheapestLocked(){const l=[...DECOR.filter(d=>!state.inventory.includes(d.id)),...THEMES.filter(t=>!state.ownedThemes.includes(t.id)),...ACC.filter(a=>a.shop==='boutique'&&!state.ownedAcc.includes(a.id)),...TREATS.filter(t=>!state.treatsGiven.includes(t.id))].sort((a,b)=>a.cost-b.cost);return l[0];}

/* ----- Świat ----- */
function viewWorld(){switch(state.location){case'home':return worldHome();case'boutique':return shopAcc('Butik','boutique');case'furniture':return furnitureScreen();case'cafe':return cafeScreen();case'park':return worldPark();case'spa':return spaScreen();default:return worldMap();}}
function spot(id,label,style){return`<button class="spot" data-act="goto" data-id="${id}" style="${style}"><span>${label}</span></button>`;}
function worldMap(){const spaUnlocked=state.places.includes('spa');const wp=wakePct();const next=TOWN_BEATS.find(b=>!state.townBeats.includes(b.id));
  return header()+`<div class="sec"><h2>Budzące się miasteczko</h2><span class="meta">dotknij miejsca, by je odwiedzić</span></div>
    <div class="worldwrap"><div class="worldmap">
      <img class="town-asleep" src="assets/lila/world_asleep.png" alt="">
      <img class="town-awake" src="assets/lila/world.png" alt="Miasteczko Lili" style="opacity:${wp/100}">
      ${spot('home','Dom','left:36%;top:18%;width:30%;height:34%')}
      ${spot('boutique','Butik','left:11%;top:30%;width:24%;height:26%')}
      ${spot('cafe','Kawiarnia','left:60%;top:36%;width:31%;height:26%')}
      ${spot('furniture','Meble','left:36%;top:54%;width:30%;height:16%')}
      ${spot('park','Park','left:10%;top:60%;width:35%;height:24%')}
    </div>
    <div class="chapter"><div class="ch-top"><b>Akt 1 · Pierwszy Blask</b><span>${wp}%</span></div>
      <div class="wb"><i style="width:${wp}%"></i></div>
      ${next?`<div class="ch-next">${icon('sparkles2')} Blask budzi miasteczko — następne: <b>${next.label}</b> (przy ${next.at}%)</div>`:`<div class="ch-next">${icon('trophy')} Całe miasteczko się obudziło! 🎉</div>`}
    </div></div>
    <div class="newplace ${spaUnlocked?'done':''}" data-act="${spaUnlocked?'goto':'unlockspa'}" data-id="spa">
      <div class="np-ic">${icon(spaUnlocked?'sparkles2':'lock')}</div>
      <div class="np-tx"><b>Spa Lili</b><small>${spaUnlocked?'Otwarte — wpadnij na dzień spa':`Zupełnie nowe miejsce — odblokuj za ${SPA_COST_HEARTS} serduszek`}</small></div>
      <div class="np-cost">${spaUnlocked?icon('back','style="transform:rotate(180deg)"'):icon('heart')+SPA_COST_HEARTS}</div>
    </div>
    <div class="hintline">${icon('sparkle')} <b>${state.sparks}</b> iskierek &nbsp;·&nbsp; ${icon('heart')} <b>${state.hearts}</b> serduszek</div>`;}
function locHeader(title){return`<div class="locbar"><button class="back" data-act="backmap">${icon('back')} Miasto</button><div class="chips"><div class="chip heart">${icon('heart')}${state.hearts}</div><div class="chip spark">${icon('sparkle')}${state.sparks}</div></div></div><div class="sec"><h2>${title}</h2></div>`;}
function setBar(key){const owned=setOwned(key).length,total=SETS[key].items.length;return`<div class="setbar"><span>${SETS[key].name}</span><div class="sb"><i style="width:${Math.round(owned/total*100)}%"></i></div><b>${owned}/${total}</b></div>`;}
function shopAcc(title,shop){const list=ACC.filter(a=>a.shop===shop);
  const cards=list.map(it=>{const owned=state.ownedAcc.includes(it.id),worn=state.accessory===it.id;const cls=owned?'owned':(state.sparks<it.cost?'cant':'');return`<div class="shopcard"><div class="pre">${it.svg.replace('width="100%"','width="62"')}</div><b>${esc(it.name)}</b><button class="buy ${cls}" data-act="buyacc" data-id="${it.id}">${owned?(worn?'Założone':'Załóż'):icon('sparkle')+' '+it.cost}</button></div>`;}).join('');
  return locHeader(title)+`<div class="shoplila">${lilaFig('hero',150)}</div>${setBar('wardrobe')}<div class="shop">${cards}</div><div style="height:8px"></div>`;}
function furnitureScreen(){const themes=THEMES.map(t=>{const owned=state.ownedThemes.includes(t.id),active=state.theme===t.id;return`<div class="shopcard"><div class="pre"><div class="swatch" style="background:${t.wall}"></div></div><b>${t.name}</b><button class="buy ${owned?'owned':(state.sparks<t.cost?'cant':'')}" data-act="buytheme" data-id="${t.id}">${active?'Wybrany':owned?'Wybierz':icon('sparkle')+' '+t.cost}</button></div>`;}).join('');
  const furn=DECOR.map(d=>{const owned=state.inventory.includes(d.id);return`<div class="shopcard"><div class="pre">${d.svg.replace('width="100%"','width="62"')}</div><b>${esc(d.name)}</b><button class="buy ${owned?'owned':(state.sparks<d.cost?'cant':'')}" data-act="buyhome" data-id="${d.id}">${owned?'Posiadane':icon('sparkle')+' '+d.cost}</button></div>`;}).join('');
  return locHeader('Sklep z meblami')+setBar('home')+`<div class="subsec">Motywy pokoju</div><div class="shop">${themes}</div><div class="subsec">Meble</div><div class="shop">${furn}</div><div style="height:8px"></div>`;}
function cafeScreen(){const cards=TREATS.map(it=>{const got=state.treatsGiven.includes(it.id);return`<div class="shopcard"><div class="pre">${it.svg.replace('width="100%"','width="56"')}</div><b>${esc(it.name)} ${got?icon('check','style="width:13px;height:13px;color:#2F9B72;vertical-align:-1px"'):''}</b><button class="buy ${state.sparks<it.cost?'cant':''}" data-act="treat" data-id="${it.id}">${icon('heart')} +${it.bond} · ${icon('sparkle')}${it.cost}</button></div>`;}).join('');
  return locHeader('Kawiarnia')+`<div class="shoplila">${lilaFig('hero',150)}</div><p class="note">Poczęstuj Lilę czymś pysznym — to pogłębia Waszą przyjaźń i wypełnia kolekcję.</p>${setBar('treats')}<div class="shop">${cards}</div><div style="height:8px"></div>`;}
function worldHome(){const th=THEMES.find(t=>t.id===state.theme)||THEMES[0];
  const items=DECOR.filter(d=>state.inventory.includes(d.id)).map(d=>`<div class="item" style="${d.pos}">${d.svg}</div>`).join('');
  const wardrobe=state.ownedAcc.length?`<div class="subsec">Szafa Lili</div><div class="wardrobe"><button class="wbtn ${!state.accessory?'sel':''}" data-act="equipacc" data-id="">${icon('paw')}</button>${state.ownedAcc.map(id=>{const a=ACC.find(x=>x.id===id);return`<button class="wbtn ${state.accessory===id?'sel':''}" data-act="equipacc" data-id="${id}">${a.svg.replace('width="100%"','width="34"')}</button>`;}).join('')}</div>`:'';
  return locHeader('Dom Lili')+`<div class="room-wrap"><div class="room care-stage" data-act="pet"><div style="position:absolute;inset:0;background:${th.wall}"></div><div class="floor" style="background:${th.floor}"></div>${items}<div class="roomlila">${lilaFig('hero',176)}</div></div></div>${wardrobe}<div class="hintline">${icon('home')} Odwiedź sklepy w mieście, aby ocieplić dom Lili</div><div style="height:8px"></div>`;}
function worldPark(){const walk=state.habits.find(h=>h.id==='walk');
  const blooms=state.garden.map((p,i)=>p&&plotStage(p)>=3?`<div class="item" style="${['left:14%','left:44%','right:14%'][i]};bottom:16%;width:15%;z-index:3">${SEEDS.find(s=>s.id===p.seed).bloom}</div>`:'').join('');
  const plots=state.garden.map((p,i)=>{
    if(!p)return`<div class="plot empty" data-act="plant" data-id="${i}"><div class="soil">${icon('plus')}</div><small>Zasadź</small></div>`;
    const st=plotStage(p),s=SEEDS.find(x=>x.id===p.seed);
    const art=st>=3?s.bloom.replace('width="100%"','width="46"'):`<svg viewBox="0 0 40 50" width="40"><ellipse cx="20" cy="44" rx="13" ry="5" fill="#C9A98A"/>${st===0?'<circle cx="20" cy="40" r="3" fill="#8a6b50"/>':st===1?'<path d="M20 44v-10" stroke="#5FB894" stroke-width="3"/><path d="M20 36c-6 0-8-6-8-6s6-1 8 6z" fill="#7FBE9C"/>':'<path d="M20 44V26" stroke="#5FB894" stroke-width="3"/><circle cx="20" cy="24" r="6" fill="#A6E0C9"/>'}</svg>`;
    const action=st>=3?`<button class="pbtn harvest" data-act="harvest" data-id="${i}">Zbierz ${icon('heart')}</button>`:`<button class="pbtn ${p.watered===today()?'wet':''}" data-act="water" data-id="${i}">${p.watered===today()?'Podlane':'Podlej'}</button>`;
    return`<div class="plot"><div class="soil grown">${art}</div><small>${st>=3?s.name:['Nasionko','Kiełek','Pączek'][st]}</small>${action}</div>`;}).join('');
  const cards=SEEDS.map(s=>{const got=state.gardenHarvested.includes(s.id);return`<div class="shopcard"><div class="pre">${s.bloom.replace('width="100%"','width="50"')}</div><b>${esc(s.name)} ${got?icon('check','style="width:13px;height:13px;color:#2F9B72;vertical-align:-1px"'):''}</b><button class="buy" data-act="plantpick" data-id="${s.id}">${icon('sparkle')} ${s.cost}</button></div>`;}).join('');
  return locHeader('Park i ogród')+`<div class="room-wrap"><div class="room park"><div style="position:absolute;inset:0;background:linear-gradient(180deg,#CFEFDD,#BCE6CF)"></div><div class="floor" style="background:#A9DCC0"></div>${blooms}<div class="roomlila">${lilaFig('hero',146)}</div></div></div>
    <button class="walkbtn" data-act="walk">${icon('walk')} Zabierz Lilę na spacer <span>+${walk?walk.sparks:12} ✦</span></button>
    <div class="subsec">Zasadź coś ładnego</div><div class="shop">${cards}</div><div style="height:8px"></div>`;}
function spaScreen(){const day=getDay(today());const spaDone=day.flags.spa;const list=ACC.filter(a=>a.shop==='spa');
  const cards=list.map(it=>{const owned=state.ownedAcc.includes(it.id),worn=state.accessory===it.id;return`<div class="shopcard"><div class="pre">${it.svg.replace('width="100%"','width="62"')}</div><b>${esc(it.name)}</b><button class="buy ${owned?'owned':(state.sparks<it.cost?'cant':'')}" data-act="buyacc" data-id="${it.id}">${owned?(worn?'Założone':'Załóż'):icon('sparkle')+' '+it.cost}</button></div>`;}).join('');
  return locHeader('Spa Lili')+`<div class="room-wrap"><div class="room care-stage" data-act="pet"><div style="position:absolute;inset:0;background:linear-gradient(180deg,#E3F1FB,#E9E4F7)"></div><div class="floor" style="background:#D4E6F2"></div><div class="roomlila">${lilaFig('hero',160)}</div></div></div>
    <button class="walkbtn" style="background:#9C86D6" data-act="spaday" ${spaDone?'disabled style="opacity:.5;background:#9C86D6"':''}>${icon('sparkles2')} ${spaDone?'Lila czuje się dziś cudownie':'Zafunduj Lili dzień spa'} <span>+6 ♥</span></button>
    <div class="subsec">Sklepik spa</div><div class="shop">${cards}</div><div style="height:8px"></div>`;}

/* ----- Podróż (statystyki + wspomnienia + kolekcje) ----- */
function viewJourney(){const names=['N','Pn','Wt','Śr','Cz','Pt','So'];let cells='';
  for(let i=6;i>=0;i--){const d=shiftDay(today(),-i),day=state.log[d];const act=activeHabits().length;const score=day?Object.values(day.counts).filter(n=>n>=1).length:0;const win=day&&score>=Math.min(3,Math.max(1,act));const dt=new Date(d+'T00:00:00');cells+=`<div class="d"><small>${names[dt.getDay()]}</small><div class="dot ${win?'win':''} ${i===0?'today':''}">${win?icon('check'):dt.getDate()}</div></div>`;}
  const li=levelInfo(state.lifetime),bi=bondInfo(state.bond.xp);
  const cols=Object.keys(SETS).map(k=>{const o=setOwned(k).length,t=SETS[k].items.length;return`<div class="colrow"><span>${SETS[k].name}</span><div class="sb"><i style="width:${Math.round(o/t*100)}%"></i></div><b>${o}/${t}</b></div>`;}).join('');
  const mems=state.journal.length?state.journal.slice(0,18).map(m=>`<div class="mem"><div class="mem-ic">${icon(m.ic)}</div><div class="mem-tx"><b>${esc(m.text)}</b><small>${relDay(m.date)}</small></div></div>`).join(''):`<p class="note">Twoje wspomnienia z Lilą pojawią się tutaj 🤍</p>`;
  const badges=BADGES.map(b=>{const got=b.test(state),t=TINT[b.color];return`<div class="badge ${got?'':'locked'}"><div class="em" style="background:${got?t.bg:'#EFE5DE'};color:${got?t.fg:'#B7A6AE'}">${icon(got?b.icon:'lock')}</div><small>${b.name}</small></div>`;}).join('');
  return header()+`<div class="sec"><h2>Ten tydzień</h2></div><div class="cal">${cells}</div>
    <div class="stats"><div class="stat"><div class="n">${displayStreak()}</div><div class="l">Seria dni${state.streak.freezes?` · ${state.streak.freezes} ❄`:''}</div></div><div class="stat"><div class="n">${bi.level}</div><div class="l">Poziom przyjaźni</div></div><div class="stat"><div class="n">${state.lifetime}</div><div class="l">Zdobyte iskierki</div></div><div class="stat"><div class="n">${state.hearts}</div><div class="l">Serduszka</div></div></div>
    <div class="sec"><h2>Wspomnienia</h2><span class="meta">${icon('book')}</span></div><div class="memwrap">${mems}</div>
    <div class="sec"><h2>Kolekcje</h2></div><div class="cols">${cols}</div>
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
  case'goto':state.location=id;render();scrollTo(0,0);break;
  case'backmap':state.location='map';render();scrollTo(0,0);break;
  case'tap':tapHabit(state.habits.find(h=>h.id===id));break;
  case'dec':decHabit(state.habits.find(h=>h.id===id));break;
  case'pet':petLila();break;
  case'treat':giveTreat(TREATS.find(t=>t.id===id));break;
  case'buytheme':buyTheme(id);break;
  case'buyhome':buyHome(id);break;
  case'buyacc':buyAcc(id);break;
  case'equipacc':state.accessory=id||null;save();render();break;
  case'unlockspa':unlockPlace('spa',SPA_COST_HEARTS);break;
  case'spaday':{const day=getDay(today());if(day.flags.spa){toast('Już rozpieszczona dzisiaj 🤍','heart');break;}day.flags.spa=1;addBond(6);addMemory('sparkles2','Dzień spa z Lilą — taki relaks');toast('Lila czuje się cudownie! +6 przyjaźni','sparkles2');confetti();save();render();break;}
  case'plant':openSeedSheet(id);break;
  case'plantpick':openSeedSheet(0);break;
  case'doplant':{const[i,s]=id.split(':');plantSeed(+i,s);break;}
  case'water':water(+id);break;
  case'harvest':harvest(+id);break;
  case'walk':{const w=state.habits.find(h=>h.id==='walk');if(w&&w.active){tapHabit(w);addBond(3);}else toast('Włącz „Spacer po posiłku" w Nawykach','heart');break;}
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
// przyjaźń za codzienne odwiedziny
if(state.lastVisit!==today()){const gap=state.lastVisit?daysBetween(state.lastVisit,today()):0;addBond(5);if(gap>1)setTimeout(()=>toast('Lila tęskniła! Dobrze, że jesteś 🤍','heart'),500);state.lastVisit=today();save();}
checkTownBeats();
render();
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
  navigator.serviceWorker.addEventListener('message',e=>{if(e.data&&e.data.type==='SW_UPDATED')window.location.reload();});
}
