// service-worker.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

/*self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});*/

// Nutzen self.__WB_MANIFEST, um eine Liste der Assets zu erhalten, die von Workbox vorauscachiert werden sollen
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);


self.addEventListener("install", (event) => {
  console.log("Service Worker: Installiert");

  // Cache static assets
  event.waitUntil(
    cacheHelper.cacheAssets([
      "/css/main.css",
      "/js/main.js",
      "/img/favicon_heißhunger.png",
    ])
  );
});
const currentCacheName = 'my-cache-v1';
self.addEventListener("activate", (event) =>{
  console.log("Service Worker: Clean up old Caches");
  console.log('Service Worker: Aktivierung gestartet und alte Caches werden bereinigt');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== currentCacheName) {
            console.log('Service Worker: Löschen alter Cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );})

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching");

  // Cache API responses
  const response = cacheHelper.getCacheResponse(event.request);
  if (response) {
    event.respondWith(response);
  } else {
    // Fetch the resource from the network
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
