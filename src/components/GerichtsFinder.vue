<template>

  <!-- Outer Tab content Gerichtsfinder -->
  <div id="Gerichtsfinder" class="tabcontent">
    <h3>Gerichtsfinder</h3>
    <p>Finde dein Gericht!</p>
    <input type="text" id="searchInput" onkeyup="searchFunction()" placeholder="Finde dein Gericht">
    <div id="searchResults"></div>

    <!-- Neue innere Tabs für Gerichtsfinder -->
    <div class="inner-tab">
      <button class="inner-tablinks" onclick="openInnerTab(event, 'Vorspeise')">Vorspeise</button>
      <button class="inner-tablinks" onclick="openInnerTab(event, 'Suppe')">Suppe</button>
      <button class="inner-tablinks" onclick="openInnerTab(event, 'Hauptgericht')">Hauptgericht</button>
      <button class="inner-tablinks" onclick="openInnerTab(event, 'Beilagen')">Beilagen</button>
      <button class="inner-tablinks" onclick="openInnerTab(event, 'Dessert')">Dessert</button>
    </div>

    <!-- Innerer Tab-Inhalt für Gerichtsfinder -->
    <div id="Vorspeise" class="inner-tabcontent">
      <h4>Vorspeisen</h4>
      <!-- Inhalt für Vorspeisen -->
      [Disclaimer: Hier von API getMeals einfügen]
    </div>
    <div id="Suppe" class="inner-tabcontent">
      <h4>Suppen</h4>
      <!-- Inhalt für Suppen -->
      [Disclaimer: Hier von API getMeals einfügen]
    </div>
    <div id="Hauptgericht" class="inner-tabcontent">
      <h4>Hauptgerichte</h4>
      <!-- Inhalt für Hauptgerichte -->
      [Disclaimer: Hier von API getMeals einfügen]
    </div>
    <div id="Beilagen" class="inner-tabcontent">
      <h4>Beilagen</h4>
      <!-- Inhalt für Beilagen -->
      [Disclaimer: Hier von API getMeals einfügen]
    </div>
    <div id="Dessert" class="inner-tabcontent">
      <h4>Desserts</h4>
      <!-- Inhalt für Desserts -->
      [Disclaimer: Hier von API getMeals einfügen]
    </div>
  </div>


</template>

<script>
export default {
  name: "GerichtsFinder"
  , methods: {

  }, props: {

  }, data() {
    return {

    }
  }
}

</script>

<style>


</style>
