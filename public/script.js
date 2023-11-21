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

document.getElementById('modeToggle').addEventListener('click', function () {
    let body = document.body;
    let button = this;

    if (body.classList.contains('night')) {
        body.classList.replace('night', 'day');
        button.textContent = 'Wechsle zu Nachtmodus';
    } else {
        body.classList.replace('day', 'night');
        button.textContent = 'Wechsle zu Tagmodus';
    }
});

// Standardmodus als Tagmodus festlegen
document.body.classList.add('day');
