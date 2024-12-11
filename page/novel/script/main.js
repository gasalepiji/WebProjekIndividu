document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('copyBlocker');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closePopup = document.getElementById('closePopup');

    element.addEventListener('selectstart', (e) => {
        e.preventDefault();
    });

    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    element.addEventListener('copy', (e) => {
        e.preventDefault();
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85) || // Ctrl+U
        (event.keyCode === 123)) { // F12
        event.preventDefault();
        return false;
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});