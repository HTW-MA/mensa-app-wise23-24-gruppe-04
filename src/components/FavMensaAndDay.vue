<template>
  <div style="display: flex; justify-content: space-between">
    <p><b>Deine Mensa:</b> {{ this.fav_mensa }}</p>
  <input id="date" type="date" @change="change_date" v-model="selectedDay">
  </div>
  <div>
    <select
      v-model="selectedRole"
      @change="change_role"
      style="position: absolute; left: 2vw"
    >
      <option v-for="(role, index) in roles" :key="index" :value="role.value">
        {{ role.label }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: "FavMensaAndDay",
  methods: {
    /**
     * Changes the role of the user
     * Is called when the user changes the role in the dropdown menu
     * Stores the new role in the local storage
     */
    change_role() {
      localStorage.setItem("sel_role", this.selectedRole);
      //TODO: Reload is a terrible solution, has to be changed
      window.location.reload();
    },
    /**
     * Changes the day of the user
     * Is called when the user changes the day in the calender input
     * Stores the new day in the local storage
     */
    change_date() {
      //TODO: display the selected day also after reload
      localStorage.setItem("sel_day", this.selectedDay);
    },
  },
  props: {},
  data() {
    return {
      /**
       * fav_mensa: The mensa the user has selected as his favorite
       * selectedRole: The role the user has selected in the dropdown menu
       * selectedDay: The day the user has selected in the calender input
       */
      fav_mensa: localStorage.getItem("fav_mensa"),
      selectedRole: 0,
      roles: [
        { label: "Student", value: 0 },
        { label: "Mitarbeiter", value: 1 },
        { label: "Gast", value: 2 },
      ],
      selectedDay: null
    };
  },
  mounted() {
    this.selectedRole = localStorage.getItem("sel_role");
  },
};
</script>

<style>
/* Stile für das Dropdown-Menü */
.dropdown {
  display: inline-block;
  position: relative;
}

.dropdown-select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
}

/* Stile für das Dropdown-Auswahlmenü */
.dropdown-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}
</style>
