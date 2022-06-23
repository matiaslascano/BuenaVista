/* Menú despegable responsive */

const button = document.querySelector('.header_button');
const nav    = document.querySelector('.header_nav');

button.addEventListener('click',() => {
  nav.classList.toggle('header_nav--activo');
}
);

/* Simulador de reserva de habitacion */


class Habitaciones {
  constructor(tipo, precio) {
    this.tipo = tipo;
    this.precio = precio;
  }
}

const habitacionSimple = new Habitaciones('Simple', 3500);
const habitacionDoble = new Habitaciones('Doble', 3000);
const habitacionTriple = new Habitaciones('Triple', 2500);
const habitacionSuite = new Habitaciones('Suite', 4500);

const habitHotel = [habitacionSimple, habitacionDoble, habitacionTriple, habitacionSuite];

const botonReserva = document.getElementById("reserva__portada")
botonReserva.onclick = function(){
  let saludo = prompt("Bienvenido al Hotel BuenaVista, cual es su nombre?");
  let nombre = alert("Muchas gracias por elegirnos " + saludo);
  let habitaciones = prompt("Por favor, seleccione una habitación: " + habitHotel[0].tipo + ", " + habitHotel[1].tipo + ", " + habitHotel[2].tipo + ", " + habitHotel[3].tipo);
  let noche = prompt("Por favor, seleccione la cantidad de noches que desea hospedarse");
  
  if (habitaciones == habitHotel[0].tipo) {
    alert("Su habitación es: " + habitacionSimple.tipo + " y el precio es: " + habitacionSimple.precio * noche);  
  }
  else if (habitaciones == habitHotel[1].tipo) {
    alert("Su habitación es: " + habitacionDoble.tipo + " y el precio es: " + habitacionDoble.precio * noche);
  }
  else if (habitaciones == habitHotel[2].tipo) {
    alert("Su habitación es: " + habitacionTriple.tipo + " y el precio es: " + habitacionTriple.precio * noche);
  }
  else if (habitaciones == habitHotel[3].tipo) {
    alert("Su habitación es: " + habitacionSuite.tipo + " y el precio es: " + habitacionSuite.precio * noche); 
  }else {
    alert("Por favor, seleccione una habitación válida");
  }

  let despedida = alert("Muchas gracias por elegirnos, que disfrutes tu estadía " + saludo);
}
