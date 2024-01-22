<template>
  <BurgerMenu @toggle-mode="handleToggleMode" />
  <FavMensaAndDay></FavMensaAndDay>
  <router-view />
  <link id="dark-theme-style" rel="stylesheet" />
  <link rel="apple-touch-icon" sizes="180x180" href="../public/img/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../public/img/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../public/img/icons/favicon-16x16.png">
  <link rel="manifest" href="../public/manifest.json">
  <link rel="mask-icon" href="../public/img/icons/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <!-- ios support -->
<!--  <link rel="apple-touch-icon" href="../public/img/icons/apple-touch-icon.png">-->
<!--  <meta name="apple-mobile-web-app-status-bar" content="#aa7700">-->
</template>

<script>
import BurgerMenu from "@/components/BurgerMenu.vue";
import FavMensaAndDay from "@/components/FavMensaAndDay.vue";


export default {
  name: "App",
  components: {
    FavMensaAndDay,
    BurgerMenu,
  },
  created() {
    const savedMode = localStorage.getItem('isNightMode');
    if (savedMode !== null) {
      this.isNightMode = savedMode === 'true';
      this.applyTheme(this.isNightMode);
    }
  },
  methods: {
    handleToggleMode(isNightMode) {
      if (isNightMode) {
        document.body.classList.add("night");
        document.body.classList.remove("day");
      } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
      }
      // Update the local storage
      localStorage.setItem('isNightMode', isNightMode);
    }
  },
  props: {},
  data() {
    return {};
  },
};
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
  transition:
    background-color 0.5s,
    color 0.5s;
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
  background-color: #ffebcd;
  color: #333;
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
  border: 1px solid #ccc ;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  border-radius: 5px;
  text-align: center;
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
  border-radius: 25px;

}

/* Stile für innere Tab-Buttons */
.inner-tab button {
  background-color: inherit;
  flex-grow: 1;
  /* Jeder Button nimmt gleich viel Raum ein */
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  text-align: center;
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
  transition: 0.4s;
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
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: #2196f3;
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

/* Stil für das Burger-Menü */
.burger-menu {
  position: fixed;
  top: 50px; /* Anpassen der Position nach Bedarf */
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999; /* Stellt sicher, dass das Menü über anderen Inhalten liegt */
}

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

.hidden {
  display: none;
}

.visible {
  display: block; /* or whatever display type is appropriate */
}

/* Ab hier Nachtmodus */
/* Nachtmodus */

/* General Body in Night Mode */
body.night {
  background-color: #333;
  color: #fff;
}

/* General Container in Night Mode */
#content.night {
  border: 1px solid #444;
  background-color: #222;
  color: #ddd;
}

/* Tab in Night Mode */
.tab.night {
  border: 1px solid #555;
  background-color: #222;
}

/* Buttons inside the tab in Night Mode */
.tab.night button {
  color: #ddd;
}

.tab.night button:hover {
  background-color: #444;
}

/* Active tablink in Night Mode */
.tab.night button.active {
  background-color: #333;
}

/* Tab content in Night Mode */
.tabcontent.night {
  border: 1px solid #555;
  background-color: #222;
  color: #ddd;
}

/* User Icon in Night Mode */


/* Inner Tabs in Night Mode */
.inner-tab.night {
  border: 1px solid #555;
  background-color: #222;
}

/* Inner Tab Buttons in Night Mode */
.inner-tab.night button {
  color: #ddd;
}

.inner-tab.night button:hover {
  background-color: #444;
}

.inner-tab.night button.active {
  background-color: #333;
}

/* Inner Tab Content in Night Mode */
.inner-tabcontent.night {
  border: 1px solid #555;
  background-color: #222;
  color: #ddd;
}

/* Search Input and Results in Night Mode */
#searchInput.night {
  border: 1px solid #444;
  background-color: #222;
  color: #ddd;
}

#searchResults.night p {
  color: #ddd;
}

/* Toggle Switch in Night Mode */
.toggle-switch.night .toggle-slider {
  background-color: #555;
}

.toggle-switch.night .toggle-slider:before {
  background-color: #333;
}

/* Burger Menu in Night Mode */
.burger-menu.night {
  background-color: #222;
  border: 1px solid #444;
  color: #ddd;
}

/* Dropdown Menu in Night Mode */
.dropdown-select.night {
  background-color: #222;
  color: #ddd;
  border: 1px solid #444;
}

.dropdown-select.night:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}
</style>
