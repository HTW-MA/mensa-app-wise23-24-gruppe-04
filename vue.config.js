const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name : 'Heißhunger',

    workboxPluginMode: 'InjectManifest', // Verwenden des InjectManifest Modus
    workboxOptions: {
      swSrc: './src/service-worker.js',
      // Weitere Workbox-Optionen hier
    }
  }
});
