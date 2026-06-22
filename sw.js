const CACHE = 'lila-v7';
const ASSETS = [
  './', './index.html', './css/styles.css', './js/app.js', './manifest.webmanifest',
  './assets/lila/hero.png', './assets/lila/celebrate.png', './assets/lila/sleep.png', './assets/lila/world.png', './assets/lila/world_asleep.png',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png', './assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()).then(() => {
      self.clients.matchAll({type:'window'}).then(clients =>
        clients.forEach(c => c.postMessage({type:'SW_UPDATED'}))
      );
    })
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
