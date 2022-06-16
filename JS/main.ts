/* Cuando hago CLICK .button, .nav TOGGLE 'header_nav--activo' */

const button = (document.querySelector('.header_button') as HTMLButtonElement);
const nav    = (document.querySelector('.header_nav')    as HTMLElement);

button.addEventListener('click',() : void => {
  nav.classList.toggle('.header_nav--activo');
});