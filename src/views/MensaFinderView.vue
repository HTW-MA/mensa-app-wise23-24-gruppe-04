<template>
<NavBar></NavBar>
  <FinderNavBar></FinderNavBar>
<MensaFinder></MensaFinder>
</template>

<script>
import MensaFinder from "@/components/MensaFinder.vue";
import FinderNavBar from "@/components/FinderNavBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "MensaFinderView"
  ,
  components: {NavBar, FinderNavBar, MensaFinder},
  methods: {

  }, props: {

  }, data() {
    return {

    }
  }
}

</script>

<style>


</style>
