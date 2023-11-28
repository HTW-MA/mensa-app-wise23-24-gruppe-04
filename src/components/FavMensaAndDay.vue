<template>
  <div style="display: flex; justify-content: space-between">
    <p ><b>Deine Mensa:</b> {{this.fav_mensa}}</p>
    <div class="dropdown">
      <select v-model="selectedDay" class="dropdown-select" @change="change_day">
        <option v-for="(day, index) in days" :key="index" :value="day.value">
          {{ day.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavMensaAndDay"
  , methods: {
    change_day(){
      localStorage.setItem('sel_day', this.selectedDay)
    }
  }, props: {

  }, data() {
    return {
      fav_mensa: localStorage.getItem('fav_mensa'),
      days: [
        { label: 'Montag', value: 1 },
        { label: 'Dienstag', value: 2 },
        { label: 'Mittwoch', value: 3 },
        { label: 'Donnerstag', value: 4 },
        { label: 'Freitag', value: 5 }
      ],
      selectedDay: 1
    }
    }, mounted() {
    const today = new Date().getDay(); // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag
    if (today === 0 || today === 6) {
      // Wenn Wochenende, setze auf Montag
      this.selectedDay = 1;
    } else {
      // Andernfalls setze auf den aktuellen Wochentag (von 1 bis 5)
      this.selectedDay = today;
    }
    localStorage.setItem('sel_day', this.selectedDay)
  }
}

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
