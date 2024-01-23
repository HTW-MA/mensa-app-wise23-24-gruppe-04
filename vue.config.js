const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name : 'UniFeast',
    workboxPluginMode: 'InjectManifest', // Verwenden des InjectManifest Modus
    workboxOptions: {
      swSrc: './public/service-worker.js', // Pfad zum Service Worker
      // Weitere Workbox-Optionen hier
    }
  }
});
