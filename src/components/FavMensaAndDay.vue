<template>
  <div style="display: flex; justify-content: space-between">
    <p><b>Deine Mensa:</b> {{ this.fav_mensa }}</p>
  <input id="date" type="date" @change="change_date" v-model="sel_day" >
  </div>
  <div>

  </div>
</template>

<script>

export default {
  name: "FavMensaAndDay",
  methods: {

    /**
     * Changes the day of the user
     * Is called when the user changes the day in the calender input
     * Stores the new day in the local storage
     */
    change_date() {
      localStorage.setItem("sel_day", this.sel_day);
      //TODO: Reload is a terrible solution, has to be changed
      window.location.reload();
    },
  },
  props: {},
  data() {
    return {
      /**
       * fav_mensa: The mensa the user has selected as his favorite
       * sel_day: The day the user has selected in the calender input
       */
      fav_mensa: localStorage.getItem("fav_mensa"),
      sel_day: localStorage.getItem("sel_day")
    };
  },
  mounted() {
    /**
     * If user enters the page for the first time, the date is set to the current date
     * TODO: should we set the role to student as well?
     */
    if (localStorage.getItem("sel_day") === null) {
      localStorage.setItem("sel_day", new Date().toISOString().slice(0, 10));
    }

  },
};
</script>