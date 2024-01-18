const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    allowedHosts: 'all'
  },
  transpileDependencies: true,
  pwa: {
    name : 'Heißhunger',
    workboxPluginMode: 'InjectManifest', // Verwenden des InjectManifest Modus
    workboxOptions: {
      swSrc: './public/service-worker.js', // Pfad zum Service Worker
      // Weitere Workbox-Optionen hier
    }
  }
});
