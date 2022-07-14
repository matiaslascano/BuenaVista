const formulario = document.getElementById("reservas")

async function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)
    const response = await fetch('https://formspree.io/f/mjvlqqrq', {
        method: 'POST',
        body: fd,
        headers: {
            Accept: 'application/json'
        }
    })

    if (response.ok){
        this.reset()
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
    } else {
        Swal.fire('Por favor igrese los datos solicitados.')

    }
    
}

formulario.addEventListener('submit', handleSendEmail)