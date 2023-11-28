<template>
  <NavBar></NavBar>
  <FinderNavBar></FinderNavBar>
  <BezirkFilter></BezirkFilter>

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FinderNavBar from "@/components/FinderNavBar.vue";
import BezirkFilter from "@/components/BezirkFilter.vue";

export default {
  name: ""
  ,
  components: {BezirkFilter, FinderNavBar, NavBar},
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
