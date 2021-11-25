const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});