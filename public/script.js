document.getElementById('modeToggle').addEventListener('click', function() {
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
