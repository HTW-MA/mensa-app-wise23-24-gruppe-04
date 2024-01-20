import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import '../public/registerServiceWorker';
import '../public/manifest.json'

createApp(App).use(router).mount("#app");
