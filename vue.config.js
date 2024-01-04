const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true/*,
  pwa: {
    workboxPluginMode: 'InjectManifest', // Verwenden des InjectManifest Modus
    workboxOptions: {
      swSrc: 'service-worker.js',
      // Weitere Workbox-Optionen hier
    }
  }*/
});
