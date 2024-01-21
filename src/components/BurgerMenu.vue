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
            <li @click="toggleToggleMode" class="button-style">{{ dayNightModeText }}</li>
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
          dayIcon: require('../../public/assets/user_icon.png'),
          nightIcon: require('../../public/assets/user_night.png'), 
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


<style scoped>
.button-style {
  padding: 10px;
  background-color: #007bff; /* Blue background */
  color: white;
  border: none;
  border-radius: none;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
  margin: 0;
  margin-right: 30px;
}

.button-style:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.button-style:active {
  background-color: #003d7a; /* Even darker blue on click */
}
</style>