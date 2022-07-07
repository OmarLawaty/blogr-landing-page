const navToggler = document.querySelector('.humburger');
const nav = document.querySelector('nav');

const dropdown = $('.ui.dropdown');
const controlDropdown = () => ({
  on: innerWidth > 1000 ? 'hover' : 'click'
});
dropdown.dropdown(controlDropdown());
onresize = () => dropdown.dropdown(controlDropdown());

navToggler.addEventListener('click', () => {
  nav.classList.toggle('open');
});
