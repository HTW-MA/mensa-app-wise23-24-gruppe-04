<template>
  <!-- Outer Tab content Gerichtsfinder -->
  <div id="Gerichtsfinder" class="tabcontent">
    <h3>Gerichtsfinder</h3>
    <p>Finde dein Gericht!</p>
    <p v-if="fav_mensa !== null">
      <b>Achtung: </b> du sieht nur Gerichte für <b>{{ this.fav_mensa }}</b> am

    </p>
    <p v-else>
      <b>Bitte wähle <a href="/mensa_finder">hier</a> eine Mensa</b>
    </p>
    <p id="role">Deine aktuelle Preiskategorie: {{ this.get_role() }}</p>
    <input
      type="text"
      id="searchInput"
      placeholder="Finde dein Gericht"
      v-model="search"
    />
    <div id="searchResults"></div>
  </div>

  <!-- Innerer Tab-Inhalt für Gerichtsfinder -->
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
            <td>wefljn</td>
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
     * Returns the role of the user as a string to be displayed ub in disclaimer
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
  },
  props: {},
  data() {
    return {
      /**
       *  all_menus is an array of all menus for the favorite mensa
       *  search is the search string in the search bar
       *  fav_mensa is the name (just the name) of the favorite mensa
       *  sel_role is the role of the user (0 = student, 1 = mitarbeiter, 2 = gast)
       */
      all_menus: [],
      search: "",
      fav_mensa: localStorage.getItem("fav_mensa"),
      sel_role: localStorage.getItem("sel_role"),
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
       *  2. Then get the id of the mensa that is saved in localStorage (favorite mensa)
       *  3. Then get all menus for that mensa
       *  4. Then filter the menu you are looking for by date
       *  5. Then return the meals of that menu
       *  6. Then display the meals in the table
       *
       */
      //TODO: filter by search string
      const selectedMenu = this.all_menus.find(menu => menu.date === localStorage.getItem("sel_day"));
      return selectedMenu ? selectedMenu.meals : [];
    },
  },

};
</script>

<style>
.table-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.meal_table {
  width: 100%;
  margin: 10px;
}

.meal_table th {
  text-align: center;
}

.meal_table td {
  text-align: center;
}

.meal_table tr {
  cursor: pointer;
}

.meal_table tr:hover {
  background-color: #f5f5f5;
}
</style>
