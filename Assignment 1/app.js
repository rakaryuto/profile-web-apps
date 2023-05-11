const hamburger = document.querySelector('.hamburger input');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('opened');
})