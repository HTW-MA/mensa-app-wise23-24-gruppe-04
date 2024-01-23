<template>
  <div>
    <img
      src="../assets/user_icon.png"
      alt="Burger Icon"
      @click="showMenu = !showMenu"
      style="cursor: pointer; width: 50px; height: 50px"
    />

    <div :class="{ hidden: !showMenu, visible: showMenu }" class="burger-menu" @click="toggleMenu">
      <!-- Hier kommen die Menüpunkte hin -->
      <ul>
        <li @click="toggleToggleMode">{{ dayNightModeText }}</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <!-- ... -->
        <!-- Benachrichtigungs-Button -->
        <li @click="requestNotificationPermission">Benachrichtigungen reactivities</li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  name: "BurgerMenu",
  data() {
    return {
      showMenu: false,
      isNightMode: false // Keeps track of the current mode
    };
  },
  computed: {
    dayNightModeText() {
      return this.isNightMode ? 'Day Mode' : 'Night Mode';
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      // No need for direct DOM manipulation
    },
    toggleToggleMode() {
      this.isNightMode = !this.isNightMode;
      this.$emit('toggle-mode', this.isNightMode);
    },
    requestNotificationPermission() {
      // Benachrichtigungsanfrage hier platzieren
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('Benachrichtigungsanfrage erfolgreich.');
        }
      });
    }
  }

};
</script>


<style>

</style>
