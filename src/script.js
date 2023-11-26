
//Funktion zum Öffnen/Schließen der Tabs
function openTab(evt, tabName) {
    //Declare all variables
    var i, tabcontent, tablinks;

    //Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    //Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";
}
//Tag Nacht Modus
document.getElementById('modeToggle').addEventListener('click', function () {
    let body = document.body;
    let button = this;

    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');
        button.textContent = 'Wechsel';
    } else {
        body.classList.remove('day');
        body.classList.add('night');
        button.textContent = 'Wechsel';
    }
});


// Dropdown Menü
document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Toggle Dropdown-Menü bei Klick auf den Button
    dropdownButton.addEventListener('click', function(event) {
        this.nextElementSibling.classList.toggle('show');
        event.stopPropagation();
    });

    // Verhindern, dass das Dropdown-Menü bei Klicks innerhalb des Menüs geschlossen wird
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Schließen des Dropdowns, wenn außerhalb geklickt wird
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});

// Code zum Anzeigen/Ausblenden der inneren Tabs
function openInnerTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

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


// Suchfunktion, derzeit ohne Funktion weil keine Datenquelle

/*function searchFunction() {
    var input, filter, results, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    results = document.getElementById("searchResults");

    // Hier wird die Datenquelle festgelegt, die durchsucht werden soll.
    // Zum Beispiel durch eine Array von Elementen gehen und mit 'filter' vergleichen.

    results.innerHTML = ''; // Löscht alte Suchergebnisse

    for (i = 0; i < data.length; i++) {
        if (data[i].toUpperCase().indexOf(filter) > -1) {
            results.innerHTML += '<p>' + data[i] + '</p>'; // Fügt passende Ergebnisse hinzu
        }
    }
}*/



// Standardmodus als Tagmodus festlegen
document.body.classList.add('day');
