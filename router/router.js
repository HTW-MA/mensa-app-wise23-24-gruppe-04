import { createRouter, createWebHistory } from "vue-router";
/*import HochschuleFilterView from "@/views/HochschuleFilterView.vue";*/
import LandingPageView from "@/views/LandingPageView.vue";
import MensaFinderView from "@/views/MensaFinderView.vue";
import KarteFilterView from "@/views/KarteFilterView.vue";
/*import BezirkFilterView from "@/views/BezirkFilterView.vue";*/
import GerichtsFinderView from "@/views/GerichtsFinderView.vue";

const routes = [
  {
    path: "/mensa_finder",
    name: "mensa_finder",
    component: MensaFinderView,
  },
  {
    path: "/",
    name: "home",
    component: LandingPageView,
  },
  /*{
    path: "/hochschule",
    name: "hochschule",
    component: HochschuleFilterView,
  },*/
  {
    path: "/map",
    name: "map",
    component: KarteFilterView,
  },
  /*{
    path: "/bezirk",
    name: "bezirk",
    component: BezirkFilterView,
  },*/
  {
    path: "/gerichte",
    name: "gerichte",
    component: GerichtsFinderView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
