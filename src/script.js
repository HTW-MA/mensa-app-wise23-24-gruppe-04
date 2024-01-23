// Funktion zum Öffnen/Schließen der Tabs
function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}
// Tag Nacht Modus
document.getElementById("modeToggle").addEventListener("click", function () {
  const body = document.body;
  const button = this;

  if (body.classList.contains("night")) {
    body.classList.remove("night");
    body.classList.add("day");
    button.textContent = "Wechsel";
  } else {
    body.classList.remove("day");
    body.classList.add("night");
    button.textContent = "Wechsel";
  }
});

// Dropdown Menü
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle Dropdown-Menü bei Klick auf den Button
  dropdownButton.addEventListener("click", function (event) {
    this.nextElementSibling.classList.toggle("show");
    event.stopPropagation();
  });

  // Verhindern, dass das Dropdown-Menü bei Klicks innerhalb des Menüs geschlossen wird
  dropdownContent.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Schließen des Dropdowns, wenn außerhalb geklickt wird
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});

// Code zum Anzeigen/Ausblenden der inneren Tabs
function openInnerTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="inner-tabcontent" and hide them
  tabcontent = document.getElementsByClassName("inner-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="inner-tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("inner-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Standardmodus als Tagmodus festlegen
document.body.classList.add("day");
