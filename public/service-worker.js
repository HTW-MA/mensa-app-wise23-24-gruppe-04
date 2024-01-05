// Importieren der Workbox-Bibliothek
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Vorauscaching der im Build-Prozess festgelegten Assets
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Caching-Strategie für Seiten-Assets (HTML, CSS, JavaScript)
workbox.routing.registerRoute(
  ({request}) => request.destination === './src/..vue' || request.destination === '/src/style.css' || request.destination === '/src/script.js',
  new workbox.strategies.NetworkFirst({
    cacheName: 'pages-cache'
  })
);

// Caching-Strategie für Bilder
workbox.routing.registerRoute(
  ({request}) => request.destination === './public/img',
  new workbox.strategies.CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Tage
      }),
    ],
  })
);

// Caching-Strategie für API-Anfragen
workbox.routing.registerRoute(
  ({url}) => url.pathname.endsWith('/api/v1'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache',
    networkTimeoutSeconds: 3,
  })
);

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Aktivierung und Bereinigung alter Caches');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== currentCacheName) {
            console.log('Service Worker: Löschen alter Cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
