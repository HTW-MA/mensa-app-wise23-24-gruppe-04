<template>
  <NavBar></NavBar>
  <FinderNavBar></FinderNavBar>
  <HochschuleFilter></HochschuleFilter>

</template>

<script>
import FinderNavBar from "@/components/FinderNavBar.vue";
import HochschuleFilter from "@/components/HochschuleFilter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name:"HochschuleFilterView",
  components: {
    NavBar,
    HochschuleFilter,
    FinderNavBar
  },
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
