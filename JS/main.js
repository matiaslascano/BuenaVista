/* Menú despegable responsive */

const button = document.querySelector('.header_button');
const nav    = document.querySelector('.header_nav');

button.addEventListener('click',() => {
  nav.classList.toggle('header_nav--activo');
}
);

/* Simulador de reserva de habitacion */

/*  class Habitaciones {
  constructor(tipo, precio) {
    this.tipo = tipo;
    this.precio = precio;
  }
}

const habitacionSimple = new Habitaciones('Simple', 3500);
const habitacionDoble = new Habitaciones('Doble', 3000);
const habitacionTriple = new Habitaciones('Triple', 2500);
const habitacionSuite = new Habitaciones('Suite', 4500); */

let habitacionSimple = {
  nombre: 'Simple',
  precio: 3500,
} 
let habitacionDoble = {
  nombre: 'Doble',
  precio: 3000,
} 
let habitacionTriple = {
  nombre: 'Triple',
  precio: 2500,
} 
let habitacionSuite = {
  nombre: 'Suite',
  precio: 4500,
} 

localStorage.setItem('habitacionSimple', JSON.stringify(habitacionSimple))
localStorage.setItem('habitacionDoble', JSON.stringify(habitacionDoble))
localStorage.setItem('habitacionTriple', JSON.stringify(habitacionTriple))
localStorage.setItem('habitacionSuite', JSON.stringify(habitacionSuite))

let reservaOk = function (){
  let nombreReserva = document.getElementById("nombre").value;
  let habitReserva = document.getElementById("habitaciones").value;
  let nochesReserva = document.getElementById("noches").value;
  let emailReserva = document.getElementById("email").value;
}

const botonReserva = document.getElementById("botonReserva");
const formReserva = document.querySelector(".formActivo");

botonReserva.addEventListener('click',() => {
  let reservaLista = document.getElementById("reservaLista");
  let reservaListaConfirm = document.createElement("p");
  let textoParrafo = document.createTextNode("Muchas gracias por elegirnos. En instantes recibirá en su correo electrónico la confirmación de su reserva. Esperamos que disfrute su estadía.");
  reservaLista.appendChild(textoParrafo);
  formReserva.classList.toggle('formInactivo');
}
)



