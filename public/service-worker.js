// service-worker.js
import { precacheAndRoute } from 'workbox-precaching';
import * as events from "events";  // npm install workbox-precaching

precacheAndRoute(self.__WB_MANIFEST);

const CACHE_NAME = 'assets-cache-v4';

self.addEventListener('install', event => {
  event.waitUntil(
    cacheHelper.cacheAssets([
      "/css/main.css",
      "/js/main.js",
      "/img/logo.png",
    ]),
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
  const response = cacheHelper.getCacheResponse(event.request);
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
  if (response){
    event.respondWith(response);
  } else {
    event.respondWith(fetch(event.request));
  }
});
// Hilfsfunktionen
async function cacheHelper() {
  // Cache-Objekt erstellen
  const cache = await caches.open("my-cache");

  // Assets zwischenspeichern
  async function cacheAssets(assets) {
    for (const asset of assets) {
      await cache.add(asset);
    }
  }

  // Cache-Response abrufen
  async function getCacheResponse(request) {
    const cacheEntry = await cache.match(request);
    if (cacheEntry) {
      return cacheEntry.response;
    }
  }

  return {
    cache,
    cacheAssets,
    getCacheResponse,
  };
}

self.addEventListener('sync', (event) =>{
  if (event.tag === 'offline-notification'){
    event.waitUntil(
    self.registration.showNotification('Du bist offline')
    );
  }
})
