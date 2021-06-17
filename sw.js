var CACHE_NAME = 'v1';
var urlsToCache = [
  '/',
  'index.html',
  './Imagens/favicon.ico',
  './Imagens/logo.png',
  './Imagens/star.png',
  './css/style.css',
  './imagens/menuicon.png',
  './imagens/logo1000.png',
  './css/img.jpg',
  './css/popup1bg.png',
  './css/popup.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Salvando no cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
