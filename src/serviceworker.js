// service-worker.js
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installiert");

  // Cache static assets
  event.waitUntil(
    cacheHelper.cacheAssets([
      "/css/main.css",
      "/js/main.js",
      "/img/logo.png",
    ])
  );
});

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
