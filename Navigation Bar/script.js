let menu_toggler = document.querySelector('.js-menu-toggler');
let menu_close_button = document.querySelector('.js-menu-close-button');
let nav_menu = document.querySelector('.nav');

menu_toggler.addEventListener('click', () => {
    nav_menu.classList.add('nav--active');
    document.body.classList.add('disabled-scrolling');
});

menu_close_button.addEventListener('click', () => {
    nav_menu.classList.remove('nav--active');
    document.body.classList.remove('disabled-scrolling');

});