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
  <link rel="apple-touch-icon" href="../public/img/icons/apple-touch-icon.png">
  <meta name="apple-mobile-web-app-status-bar" content="#aa7700">
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
      this.applyTheme(isNightMode);
      // Update the local storage
      localStorage.setItem('isNightMode', isNightMode);
    },
    applyTheme(isNightMode) {
      if (isNightMode) {
        document.body.classList.add("night");
        document.body.classList.remove("day");
      } else {
        document.body.classList.add("day");
        document.body.classList.remove("night");
      }
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
  border-radius: 0px;
    text-align: center;
    
}

/* Allgemein Container*/
#content {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 0px;
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
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Create an active/current tablink class */
.tab button.active {
  background-color: lightgrey;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Style the tab content */
.tabcontent {
  padding: 6px 12px;
  border: 0px solid #ccc;
  border-top: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  font-size: large;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Benutzer-Icon */
.user-icon {
  height: 30px;
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

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
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Ändern der Hintergrundfarbe der inneren Buttons beim Hovern */
.inner-tab button:hover {
  background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Erstellen einer aktiven inneren Tablink-Klasse */
.inner-tab button.active {
  background-color: lightgrey;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/* Stile für den inneren Tab-Inhalt */
.inner-tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
}

/*Hier der Style für die Suchleiste und die Suchergebnisse*/
#searchInput {
  width: 50%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 

}

/*Stil für die Suchergebnisse*/
#searchResults p {
  width: 50%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
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
  position: absolute; 
  top: 140px; 
  left: 50%; 
  transform: translateX(-50%); 
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999;
  width: auto; 
  max-width: 300px; 
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); 
  display: none; /* Hides the menu initially */
}


/* Stile für das Dropdown-Menü */
.dropdown {
  display: inline-block;
  position: relative;
  size: 100px;
}

.dropdown-select {
  padding: 4px;
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

/* Nachtmodus */

body.night {
  background-color: #121212;
  color: #fff;
}

#content.night {
  border: 1px solid #444;
  background-color: #222;
  color: #ddd;
}

.tab.night {
  border: 1px solid darkgrey;
  background-color: #222;
}

.tab.night button {
  color: darkgrey;
}

.tab.night button:hover {
  background-color: #444;
}

.tab.night button.active {
  background-color: #333;
}

.tabcontent.night {
  border: 1px solid #555;
  background-color: #222;
  color: #ddd;
}

.inner-tab.night {
  border: 1px solid #555;
  background-color: #222;
}

.inner-tab.night button {
  color: #ddd;
}

.inner-tab.night button:hover {
  background-color: #444;
}

.inner-tab.night button.active {
  background-color: #333;
}

.inner-tabcontent.night {
  border: 1px solid #555;
  background-color: #222;
  color: #ddd;
}

#searchInput.night {
  border: 1px solid #444;
  background-color: #222;
  color: #ddd;
}

#searchResults.night p {
  color: #ddd;
}

.toggle-switch.night .toggle-slider {
  background-color: #555;
}

.toggle-switch.night .toggle-slider:before {
  background-color: #333;
}

.burger-menu.night {
  background-color: #222;
  border: 1px solid #444;
  color: #ddd;
}

.dropdown-select.night {
  background-color: #222;
  color: #ddd;
  border: 1px solid #444;
}

.dropdown-select.night:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

/* Addendum: Stile für H3 und P */
h3, h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  color: #2c3e50; /* Or any color that fits your design */
  margin-bottom: 10px; /* Adjust as needed */
  text-align: center; /* Center align the text */
}

p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Merriweather, sans-serif;
  color: #2c3e50; /* Consistent with h3 color */
  margin-bottom: 20px; /* Adjust as needed */
  text-align: center; /* Center align the text */
}
body.night h3, body.night p, body.night h1 {
  color: white; /* Lighter text color for better visibility in night mode */
}

@media screen and (max-width: 600px) {
  h3, p, h1 {
    /* Adjust styles for mobile if needed */
    text-align: left; /* Example: Align text left on smaller screens */
  }
}

</style>

