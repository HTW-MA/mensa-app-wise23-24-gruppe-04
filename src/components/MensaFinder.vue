<template>
  <div id="Mensa Finder" class="tabcontent">
    <h3>Mensa Finder</h3>
    <p>Finde deine Mensa!</p>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Mensa suchen"
        aria-label="Mensa suchen"
        aria-describedby="button-addon2"
        v-model="search"
        id="searchInput"
      />
    </div>
    <div class="table-container">
      <table class="mensa_table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Adresse</th>
            <th scope="col">Öffnungszeiten</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(mensa, index) in filtered_mensen"
            :key="index"
            @click="add_fav_mensa(mensa)"
          >
            <td
              style="
                cursor: pointer;
                align-items: center;
                justify-content: center;
                display: flex;
              "
            >
              <p v-if="is_fav(mensa)">⭐️</p>
              {{ mensa.name }}
            </td>
            <td>
              {{ mensa.address.street }} in {{ mensa.address.zipcode }},
              {{ mensa.address.city }}
            </td>
            <td>{{ this.check_open(mensa) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { get_fav_mensa, get_all_mensen } from "@/data/transactionmanager_mensa";

export default {
  name: "MensaFinder",
  props: {},
  data() {
    return {
      all_mensen: [],
      fav_mensa: null,
      search: "",
    };
  },
  methods: {
    check_open(mensa) {
      //get weeksday of selected day. -1 because of the array index
       let sel_day_weekday = new Date(localStorage.getItem("sel_day")).getDay() - 1;

      try {
        return (
          "Am " +
          localStorage.getItem("sel_day") +
          " geöffnet von " +
          mensa.businessDays[sel_day_weekday].businessHours[0].openAt +
          " bis " +
          mensa.businessDays[sel_day_weekday].businessHours[0].closeAt
        );
      } catch (error) {
        return "Geschlossen";
      }
    },
    is_fav(mensa) {
      return (
        localStorage.getItem("fav_mensa") === mensa.name ||
        this.fav_mensa === mensa.name
      );
    },
    add_fav_mensa(mensa) {
      localStorage.setItem("fav_mensa", mensa.name);
      this.fav_mensa = mensa.name;
      console.log("Favored Mensa: " + localStorage.getItem("fav_mensa"));
    },
  },
  computed: {
    filtered_mensen() {
      return this.all_mensen.filter((mensa) =>
        mensa.name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  async mounted() {
    this.fav_mensa = await get_fav_mensa();
    this.all_mensen = await get_all_mensen();
  },
  created() {},
  destroyed() {},
};
</script>

<style scoped>
#searchInput {
  border: 3px solid darkgrey;
  border-radius: 10px;
}

.table-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: auto;
}

.mensa_table {
  width: 100%;
  margin: 10px;
  border-collapse: collapse;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  font-size: large;
}

.mensa_table th {
  text-align: center;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  border: 1px solid #ddd;

}

.mensa_table td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  border: 1px solid #ddd;
}

.mensa_table tr {
  cursor: pointer;
}

.mensa_table tr:hover {
  background-color: #f5f5f5;
}
@media screen and (max-width: 600px) {
  .mensa_table th, .mensa_table td {
    padding: 5px;
    text-align: left;
  }
  
}
</style>
