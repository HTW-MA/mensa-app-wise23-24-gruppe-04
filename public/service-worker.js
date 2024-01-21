// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'assets-cache-v5';
let isOfflineNotified = false; // Variable für den Offline-Status
let isOnlineNotified = true;   // Variable für den Online-Status

function showNotification(message) {
  self.registration.showNotification(message);
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([]))
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
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(networkResponse => {
        if (networkResponse.ok) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }

        // Nur anzeigen, wenn offline und noch nicht benachrichtigt
        if (!navigator.onLine && !isOfflineNotified) {
          showNotification('Du bist offline');
          isOfflineNotified = true;
        }

        return networkResponse;
      });
    })
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'offline-notification') {
    // Nur anzeigen, wenn online und noch nicht benachrichtigt
    if (navigator.onLine && !isOnlineNotified) {
      showNotification('Du bist wieder online');
      isOnlineNotified = true;
    }
  }
});
