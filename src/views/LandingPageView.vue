<template>
  <NavBar></NavBar>
  <LandingPage></LandingPage>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import NavBar from "@/components/NavBar.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";

export default {
  name: "LandPageView",
  components: { BurgerMenu, NavBar, LandingPage },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style></style>
