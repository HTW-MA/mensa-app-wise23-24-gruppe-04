<template>

  <!-- Outer Tab content Gerichtsfinder -->
  <div id="Gerichtsfinder" class="tabcontent">
    <h3>Gerichtsfinder</h3>
    <p>Finde dein Gericht!</p>
    <p><b>Achtung: </b> du sieht nur Gerichte für {{this.fav_mensa}} am {{this.get_day()}}</p>
    <input type="text" id="searchInput" placeholder="Finde dein Gericht" v-model=search>
    <div id="searchResults"></div>

  </div>

    <!-- Innerer Tab-Inhalt für Gerichtsfinder -->
    <div id="Meals" class="inner-tabcontent" style="align-items: center; justify-content: space-between">
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
        <tr v-if="menu && menu.length > 0" v-for="(meal, index) in filtered_meals" :key="index">
          <td style="max-width: 30vw">{{ meal.name }}</td>
          <td>{{meal.category }}</td>
          <!-- TODO: Validierung ob es ein Student oder nicht: user change -->
          <td>{{meal.price_student}}€</td>

        </tr>
        </tbody>
      </table>
      </div>
    </div>

</template>

<script>
import {get_menu_of_the_day} from "@/data/transactionmanager_meal.js";
import {get_all_mensen} from "@/data/transactionmanager_mensa.js";

export default {
  name: "GerichtsFinder"
  , methods: {
    get_day(){
      let currrent_day_in_words = ""
      switch (this.sel_day - 1) {
        case 0:
          currrent_day_in_words = "Montag"
          break;
        case 1:
          currrent_day_in_words = "Dienstag"
          break;
        case 2:
          currrent_day_in_words = "Mittwoch"
          break;
        case 3:
          currrent_day_in_words = "Donnerstag"
          break;
        case 4:
          currrent_day_in_words = "Freitag"
          break;
        case 5:
          currrent_day_in_words = "Samstag"
          break;
        case 6:
          currrent_day_in_words = "Sonntag"
          break;
      }
      return currrent_day_in_words
    }
  }, props: {}, data() {
    return {
      menu: null,
      search: '',
      fav_mensa: localStorage.getItem('fav_mensa'),
      sel_day: localStorage.getItem('sel_day')
    }
  }, async mounted() {

    let all_mensen = await get_all_mensen()
    let mensa_id = all_mensen.filter(mensa => mensa.name === this.fav_mensa)[0].id

    this.menu = await get_menu_of_the_day(mensa_id)


  }, computed: {
    filtered_meals() {
      return this.menu[0].meals
    }
  }
}

</script>

<style>

.table-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.meal_table{
  width: 100%;
  margin: 10px;
}

.meal_table th{
  text-align: center;
}

.meal_table td{
  text-align: center;
}

.meal_table tr{
  cursor: pointer;
}

.meal_table tr:hover{
  background-color: #f5f5f5;
}

</style>
