function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.style.display === 'block') {
        menuOverlay.style.display = 'none';
    } else {
        menuOverlay.style.display = 'block';
    }
}
