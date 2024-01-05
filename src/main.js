import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import './registerServiceWorker';
import './manifest.json'

createApp(App).use(router).mount("#app");
