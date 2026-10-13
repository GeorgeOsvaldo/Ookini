function calcularPrecio(precioUnitario, cantidad){
    const total = precioUnitario * cantidad;
    return total;
}

//function puedesReservat(cantidad) {
 //   return cantidad <= ;
//}
//function puedeReservar(tazasDisponibles){
  //  return tazasDisponibles > 0;
//}
//const botonReservar = document.querySelector("#botonReservar");

//botonReservar.addEventListener("click", function(){
    //console.log("El Usuario hizo click en el boton reservar");
//})

const botonReservar = document.querySelector("#Reservar");
const contadorTazas = document.querySelector("#Contador-Tazas");

// Agregar un evento de clic al botón de reserva y si colocamos dblclick nesecitaremos hacer doble click para que se ejecute el evento
botonReservar.addEventListener("click", function () {
    const tazasActuales = Number(contadorTazas.textContent);

    if (tazasActuales > 0) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log("Reserva realizada. Tazas restantes: " + (tazasActuales - 1));
        alert("Reserva realizada. Tazas restantes : " + (tazasActuales - 1));
    } else {
        botonReservar.textContent = "Sin cupos";
        console.log("No hay cupos disponibles.");
        botonReservar.disabled = true;
        alert("No hay cupos disponibles.");
    }
});