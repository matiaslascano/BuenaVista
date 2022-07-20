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



const reservaBtn = document.getElementById('reservar')


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














