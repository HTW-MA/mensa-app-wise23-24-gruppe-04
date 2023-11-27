<template>
  <BurgerMenu></BurgerMenu>
  <router-view/>
</template>

<script>

import BurgerMenu from "@/components/BurgerMenu.vue";

export default {
  name: 'App',
  components: {
    BurgerMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Allgemein Body*/
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  transition: background-color 0.5s, color 0.5s;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}

/* Allgemein Container*/
#content {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}

/* Tagmodus */
body.day {
  background-color: #FFEBCD;
  color: #333;
}

/* Nachtmodus */
body.night {
  background-color: #333;
  color: #fff;
}


/* Style the tab */
.tab {
  margin-top: 20px;
  position: relative;
  display: flex;
  /* Verwenden von Flexbox */
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  text-align: center;
  border-radius: 25px;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  flex-grow: 1;
  /* Jeder Button nimmt gleich viel Raum ein */
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 5px;
}


/* Change background color of buttons on hover*/
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}


/* Benutzer-Icon */
.user-icon {
  height: 30px;
  /* oder eine andere passende Größe */
  width: auto;
}


/* Stile für innere Tabs */
.inner-tab {
  display: flex;
  /* Verwenden von Flexbox */
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  text-align: center;
}

/* Stile für innere Tab-Buttons */
.inner-tab button {
  background-color: inherit;
  flex-grow: 1;
  /* Jeder Button nimmt gleich viel Raum ein */
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Ändern der Hintergrundfarbe der inneren Buttons beim Hovern */
.inner-tab button:hover {
  background-color: #dddddd7a;
}

/* Erstellen einer aktiven inneren Tablink-Klasse */
.inner-tab button.active {
  background-color: #ccc;
}

/* Stile für den inneren Tab-Inhalt */
.inner-tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/*Hier der Style für die Suchleiste und die Suchergebnisse*/
#searchInput {
  width: 50%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/*Stil für die Suchergebnisse*/
#searchResults p {
  width: 50%;
}
/* Toggle Switch Container */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* The slider */
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #2196F3;
}

input:checked + .toggle-slider:before {
  transform: translateX(26px);
}

/* Style for input[type="checkbox"] */
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Style for Day/Night labels */
.toggle-switch label {
  font-size: 12px;
  color: #666;
  text-align: center;
}

</style>
