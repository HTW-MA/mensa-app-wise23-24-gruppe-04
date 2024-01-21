<template>
  <div id="Gerichtsfinder" class="tabcontent">
    <h3>Gerichtsfinder</h3>
    <p>Finde dein Gericht!</p>
    <p style="color: #2196f3" v-if="fav_mensa !== null">
      <b>Achtung: </b> du sieht nur Gerichte für <b>{{ this.fav_mensa }}</b> am {{ this.sel_day}}
    </p>
    <p v-else style="color: #2196f3">
      <b>Bitte wähle <a href="/mensa_finder">hier</a> eine Mensa</b>
    </p>
    <p v-if="sel_role !== null" id="role" style="color: #2196f3"> <b>Achtung:</b> Deine aktuelle Preiskategorie: {{ this.get_role() }}</p>
    <p v-else style="color: #2196f3"><b>Bitte wähle eine Preiskategorie</b></p>


    <select
      v-model="selectedRole"
      @change="change_role"
    >
      <option selected>
        ---bitte wähle deine Rolle---
      </option>
      <option v-for="(role, index) in roles" :key="index" :value="role.value">
        {{ role.label }}
      </option>
    </select>
    <br>

    <input
      type="text"
      id="searchInput"
      placeholder="Finde dein Gericht"
      v-model="search"
    />
    <div id="searchResults"></div>
  </div>

  <div
    id="Meals"
    class="inner-tabcontent"
    style="align-items: center; justify-content: space-between"
  >
    <h4>Speisekarte</h4>
    <div class="table-container">
      <table class="meal_table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Typ</th>
            <th scope="col">Preis</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(meal, index) in filtered_meals"
            :key="index"
          >
            <td style="max-width: 30vw">{{ meal.name }}</td>
            <td>{{ meal.category }}</td>
            <td v-if="sel_role === '0' && meal.prices[0] !== undefined">{{ meal.prices[0].price }}</td>
            <td v-else-if="sel_role === '1' && meal.prices[1] !== undefined">{{ meal.prices[1].price }}</td>
            <td v-else-if="sel_role === '2' && meal.prices[2] !== undefined">{{ meal.prices[2].price }}</td>
            <td v-else>Sorry, kein Preis verfügbar.</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { get_all_menus } from "@/data/transactionmanager_meal.js";
import { get_all_mensen } from "@/data/transactionmanager_mensa.js";

export default {
  name: "GerichtsFinder",
  methods: {
    /**
     * Returns the role of the user as a string to be displayed in disclaimer
     * @returns {string} role of the user
     */
    get_role() {
      switch (this.sel_role) {
        case "0":
          return "Student";
        case "1":
          return "Mitarbeiter";
        case "2":
          return "Gast";
      }
    },
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
  },
  props: {},
  data() {
    return {
      /**
       *  all_menus is an array of all menus for the favorite mensa
       *  search is the search string in the search bar
       *  fav_mensa is the name (just the name) of the favorite mensa
       *  sel_role is the role of the user (0 = student, 1 = mitarbeiter, 2 = gast)
       *  selectedDay: The day the user has selected in the calender input
       *  roles: The roles the user can select in the dropdown menu
       */
      all_menus: [],
      search: "",
      fav_mensa: localStorage.getItem("fav_mensa"),
      sel_role: localStorage.getItem("sel_role"),
      sel_day: localStorage.getItem("sel_day"),
      selectedRole: 0,
      roles: [
        { label: "Student", value: 0 },
        { label: "Mitarbeiter", value: 1 },
        { label: "Gast", value: 2 },
      ],
    };
  },
  async mounted() {
    try {
      /**
       *  1. First get all mensen in
       *  2. Then get the id of the mensa that is saved in localStorage (favorite mensa)
       *  3. Then get all menus for that mensa and save them in all_menus
       *
       */
      let all_mensen = await get_all_mensen();
      let mensa_id = all_mensen.filter(
        (mensa) => mensa.name === this.fav_mensa,
      )[0].id;
      this.all_menus = await get_all_menus(mensa_id);
    } catch (error) {
      //ReferenceError if fav_mensa is null, because no mensa is selected
    }
    this.selectedRole = localStorage.getItem("sel_role");
  },
  computed: {
    /**
     * Returns the filtered meals for the favorite mensa, filtered by date, filtered by search string
     * @returns {array} filtered meals
     */
    filtered_meals() {
      //becasue mounted is async we need to check if all_menus is empty
      if (this.all_menus.length === 0) return [];

      //filter meals by date
      /**
       * How this works:
       *  1. First get all mensen in mounted()
       *  2. Then get the id of the mensa that is saved in localStorage (favorite mensa) in mounted()
       *  3. Then get all menus for that mensa and save them in all_menus in mounted()
       *  4. Then filter the menu you are looking for by date
       *  5. Then return the meals of that menu, filtered by search string
       *  6. Then display the meals in the table
       *
       */
      const selectedMenu = this.all_menus.find(menu => menu.date === localStorage.getItem("sel_day"));
      return selectedMenu ? (selectedMenu.meals).filter((meals) => {
        return meals.name.toLowerCase().includes(this.search.toLowerCase());
      }) : [];
    },
  },

};
</script>

<style>
.table-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: auto;
}

.meal_table {
  width: 100%;
  margin: 10px;
  border-collapse: collapse;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  font-size: large;
}

.meal_table th {
  text-align: center;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  border: 1px solid #ddd;
}

.meal_table td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  border: 1px solid #ddd;
}

.meal_table tr {
  cursor: pointer;
}

.meal_table tr:hover {
  background-color: #f5f5f5;
}
</style>
