// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import * as events from "events";  // npm install workbox-precaching

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'assets-cache-v4';

self.addEventListener('install', event => {
  event.waitUntil(
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

// Anfrage direkt in den Cache zu legen führte zu Problemen, deshalb so...
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return fetch(event.request).then(networkResponse => {
        // Nur gültige Antworten im Cache speichern
        if (networkResponse.ok) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }

        self.registration.showNotification('Du bist offline');
        return networkResponse;
      }).catch(() => {
        self.registration.showNotification('Du bist offline');
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
