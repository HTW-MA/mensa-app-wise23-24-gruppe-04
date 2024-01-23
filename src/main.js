import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import '../public/registerServiceWorker.js';
import '../public/manifest.json'


document.addEventListener('DOMContentLoaded', () => {
  const isNightMode = localStorage.getItem('isNightMode') === 'true';
  if (isNightMode) {
    document.body.classList.add("night");
  } else {
    document.body.classList.add("day");
  }
});

createApp(App).use(router).mount("#app");

// Standardmodus als Tagmodus festlegen
document.body.classList.add("day");
