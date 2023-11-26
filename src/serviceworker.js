// service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installiert');
    // Hier können Sie Ressourcen cachen, wenn gewünscht
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching');
    // Hier können Sie das Netzwerk-Request-Handling definieren
});
