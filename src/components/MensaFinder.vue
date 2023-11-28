<template>
  <!-- Outer Tab content Mensa Finder -->
  <div id="Mensa Finder" class="tabcontent">

    <h3>Mensa Finder</h3>
    <p>Finde deine Mensa!</p>
    <!--Search bar here-->
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Mensa suchen" aria-label="Mensa suchen"
             aria-describedby="button-addon2" v-model=search id="searchInput">
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
      <tr v-for="(mensa, index) in filtered_mensen" :key="index" @click="add_fav_mensa(mensa)">

        <td  style="cursor: pointer; align-items: center; justify-content: center; display: flex"> <p v-if="is_fav(mensa)">⭐️  </p> {{ mensa.name }}</td>
        <td>{{mensa.address.street}} in {{mensa.address.zipcode}}, {{mensa.address.city}}</td>
        <td>{{this.check_open(mensa)}}</td>
      </tr>
      </tbody>
    </table>
</div>


  </div> <!-- Schließt den Mensa Finder Tab -->
</template>

<script>
import {get_fav_mensa, get_all_mensen} from "@/data/transactionmanager_mensa";

export default {
  name: 'MensaFinder',
  props: {

  },
  data () {
    return {
      all_mensen: [],
      fav_mensa: null,
      search: ''
    }
  },
  methods: {
    check_open(mensa){
      //TODO: change time, if day is changed (localStorage.getItem("sel_day"))
      let current_time = new Date()
      //Explaination: 0 = Monday, 1 = Tuesday, 2 = Wednesday, 3 = Thursday, 4 = Friday, 5 = Saturday, 6 = Sunday
      let current_day = current_time.getDay() - 1
      let currrent_day_in_words = ""

      switch (current_day){
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

      try {
        return "Heute (" + currrent_day_in_words + ") geöffnet von " + mensa.businessDays[current_day].businessHours[0].openAt +  " bis " + mensa.businessDays[current_day].businessHours[0].closeAt
      } catch (error) {
        return "Heute geschlossen"
      }

    }, is_fav(mensa) {
      return localStorage.getItem('fav_mensa') === mensa.name || this.fav_mensa === mensa.name;
    },
    add_fav_mensa(mensa) {
      localStorage.setItem('fav_mensa', mensa.name);
      this.fav_mensa = mensa.name;
      console.log("Favored Mensa: " + localStorage.getItem('fav_mensa'));
    }
  },computed: {
    filtered_mensen() {
      return this.all_mensen.filter(mensa => mensa.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  }, async mounted() {

    this.fav_mensa = await get_fav_mensa()
    this.all_mensen = await get_all_mensen()

  }

}
</script>

<style scoped>
#searchInput{
  border: 3px solid darkgrey;
  border-radius: 10px;
}

.table-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.mensa_table{
  width: 100%;
  margin: 10px;
}

.mensa_table th{
  text-align: center;
}

.mensa_table td{
  text-align: center;
}

.mensa_table tr{
  cursor: pointer;
}

.mensa_table tr:hover{
  background-color: #f5f5f5;
}

</style>
