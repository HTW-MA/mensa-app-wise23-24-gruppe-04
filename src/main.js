import { createApp } from "vue";
import App from "./App.vue";
import router from "../router/router";
import '../public/app'

createApp(App).use(router).mount("#app");
