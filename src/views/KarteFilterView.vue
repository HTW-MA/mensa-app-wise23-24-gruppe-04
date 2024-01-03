<template>
  <NavBar></NavBar>
  <FinderNavBar></FinderNavBar>
  <KarteFilter></KarteFilter>
</template>

<script>
import FinderNavBar from "@/components/FinderNavBar.vue";
import KarteFilter from "@/components/KarteFilter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "",
  components: { NavBar, KarteFilter, FinderNavBar },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style></style>
