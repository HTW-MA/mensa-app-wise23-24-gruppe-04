<template>
  <div>
      <img
      :src="isNightMode ? nightIcon : dayIcon"
        alt="User Icon"
          @click="toggleMenu"
          style="cursor: pointer; width: 50px; height: 50px"
      />
      <div :class="{ hidden: !showMenu, visible: showMenu }" class="burger-menu">
          <!-- Menu items here -->
          <ul>
              <li @click="toggleToggleMode">{{ dayNightModeText }}</li>
              <!-- ... other menu items ... -->
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
          isNightMode: false, // Keeps track of the current mode
          dayIcon: require('../assets/user_icon.png'),
          nightIcon: require('../assets/user_night.png'), 
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
      },
      toggleToggleMode() {
          this.isNightMode = !this.isNightMode;
          this.$emit('toggle-mode', this.isNightMode);
      }
  }
};
</script>


<style>

</style>
