const controlDropdown = () => ({
  on: innerWidth > 1000 ? 'hover' : 'click'
});

const dropdowns = $('.ui.dropdown');
dropdowns.dropdown(controlDropdown());

onresize = () => dropdowns.dropdown(controlDropdown());

const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('nav');

let isOpen = false;
navToggler.addEventListener('click', () => {
  navToggler.src = isOpen
    ? '/images/icon-hamburger.svg'
    : '/images/icon-close.svg';

  nav.classList.toggle('open');

  isOpen = !isOpen;

  // if ((navToggler.src = '/images/icon-hamburger.svg')) {
  //   navToggler.src = '/images/icon-close.svg';
  // } else {
  //   navToggler.src = '/images/icon-hamburger.svg';
  // }
});
