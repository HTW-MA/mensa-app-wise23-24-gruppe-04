<template>
  <!-- Inner Tabs inside the "Mensa Finder" Tabs -->
  <div class="inner-tab">
    <button
      class="inner-tablinks"
      onclick="window.location.href = '/hochschule'"
    >
      Hochschule
    </button>
    <button class="inner-tablinks" onclick="window.location.href = '/bezirk'">
      Bezirk
    </button>
    <button class="inner-tablinks" onclick="window.location.href = '/map'">
      Karte
    </button>
  </div>
</template>

<script>
export default {
  name: "FinderNavBar",
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style></style>
