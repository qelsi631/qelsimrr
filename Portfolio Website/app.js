function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay.style.display === 'block') {
        menuOverlay.style.display = 'none';
    } else {
        menuOverlay.style.display = 'block';
    }
}




window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust this value for when you want the change to happen
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

