import {register} from "register-service-worker";
// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import * as events from "events";  // npm install workbox-precaching

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'assets-cache-v3';

self.addEventListener('install', event => {
  event.waitUntil(
  self.registration.sync.register('offline-notification'),

  caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        // Hier wird keine statische Liste von Dateien angegeben
        // Das Cachen erfolgt dynamisch beim ersten Aufruf
      ]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request).then(networkResponse => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

self.addEventListener('sync', (event) =>{
  if (event.tag === 'offline-notification'){
    event.waitUntil(
    self.registration.showNotification('Du bist offline')
    );
  }
})

// // Importieren der Workbox-Bibliothek
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');
//
// // Vorauscaching der im Build-Prozess festgelegten Assets
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
//
// // Caching-Strategie für Seiten-Assets (HTML, CSS, JavaScript)
// workbox.routing.registerRoute(
//   ({request}) => request.destination === './src/..vue' || request.destination === '/src/style.css' || request.destination === '/src/script.js',
//   new workbox.strategies.NetworkFirst({
//     cacheName: 'pages-cache'
//   })
// );
//
// // Caching-Strategie für Bilder
// workbox.routing.registerRoute(
//   ({request}) => request.destination === './public/img',
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images-cache',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         maxEntries: 50,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Tage
//       }),
//     ],
//   })
// );
//
// // Caching-Strategie für API-Anfragen
// workbox.routing.registerRoute(
//   ({url}) => url.pathname.endsWith('/api/v1'),
//   new workbox.strategies.NetworkFirst({
//     cacheName: 'api-cache',
//     networkTimeoutSeconds: 3,
//   })
// );
//
// self.addEventListener('activate', (event) => {
//   console.log('Service Worker: Aktivierung und Bereinigung alter Caches');
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheName !== currentCacheName) {
//             console.log('Service Worker: Löschen alter Cache', cacheName);
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
