class Habitaciones {
    constructor(nombre, precio) {
        this.nombre= nombre;
        this.precio= precio;
    }
}

const habitSimple = new Habitaciones ("Simple", 3500)
const habitDoble = new Habitaciones ("Doble", 3000)
const habitTriple = new Habitaciones ("Triple", 2500)
const habitSuite = new Habitaciones ("Suite", 4500)

const listaHabitaciones = []
listaHabitaciones.push(Habitaciones)

const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');


navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

const reservaBtn = document.getElementById('reservar')

reservaBtn.addEventListener("click", function(){
    Swal.fire({
        title: '¿Desea confirmar su reserva?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Reserva confirmada. Muchas gracias.', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Los datos no fueron confirmados', '', 'info')
        }
      })
})

function capturarForm(){
    const fechaIngreso ="Ingreso: " + document.getElementById('fecha-ingreso').value;
    const fechaEgreso ="Egreso: " + document.getElementById('fecha-salida').value;
    const adultos ="Adultos: " + document.getElementById('adulto').value;
    const niños ="Niños: " + document.getElementById('niño').value;
    const habitaciones ="Habitacion: " + document.getElementById('habitacion').value;
    console.log(fechaIngreso, fechaEgreso, adultos, niños, habitaciones);   
    let milisegundosDias = 24 * 60 * 60 * 1000;
    let milisegundosTranscurridos = Math.abs(fechaIngreso.value.getTime() - fechaEgreso.value.getTime());
    let diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDias);
    console.log(diasTranscurridos); 
} 











