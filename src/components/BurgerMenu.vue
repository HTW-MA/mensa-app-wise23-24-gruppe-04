<template>
  <div>
    <img
      src="../assets/user_icon.png"
      alt="Burger Icon"
      @click="showMenu = !showMenu"
      style="cursor: pointer; width: 50px; height: 50px"
    />

    <div v-if="showMenu" class="burger-menu" @click="toggleMenu">
      <!-- Hier kommen die Menüpunkte hin -->
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <!-- ... -->
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
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      document.getElementById("burger-menu").style.display = "block";
    },
  },
};
</script>

<style>
/* Stil für das Burger-Menü */
.burger-menu {
  position: fixed;
  top: 50px; /* Anpassen der Position nach Bedarf */
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 999; /* Stellt sicher, dass das Menü über anderen Inhalten liegt */
}
</style>
