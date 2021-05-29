const controlDropdown = () => ({
  on: innerWidth > 1000 ? 'hover' : 'click'
});

const dropdowns = $('.ui.dropdown');
dropdowns.dropdown(controlDropdown());

onresize = () => dropdowns.dropdown(controlDropdown());

const navToggler = document.querySelector('.humburger');
const nav = document.querySelector('nav');

let isOpen = false;
navToggler.addEventListener('click', () => {
  nav.classList.toggle('open');
});
