<template>
  <NavBar></NavBar>
  <GerichtsFinder></GerichtsFinder>
</template>

<script>
import GerichtsFinder from "@/components/GerichtsFinder.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "GerichtsFinderView",
  components: { NavBar, GerichtsFinder },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style></style>
