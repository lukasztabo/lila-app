const CACHE = 'lila-v29';
const IMG_ASSETS = [
  './assets/lila/hero.png', './assets/lila/celebrate.png', './assets/lila/celebrate_loop.mp4', './assets/lila/sleep.png',
  './assets/lila/world.png', './assets/lila/world_asleep.png',
  './assets/icons/icon-192.png', './assets/icons/icon-512.png', './assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(IMG_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isImg = /\.(png|jpg|webp|svg|ico)$/.test(url.pathname);

  if (isImg) {
    // cache-first dla obrazków
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }))
    );
  } else {
    // network-first dla HTML/JS/CSS — zawsze świeża wersja
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(e.request))
    );
  }
});
