function calcularPrecio(PrecioUnitario, Cantidad){
    const total= PrecioUnitario * Cantidad;//multiplicacion de precio unitario por cantidad

    return total;//retorna el total de la multiplicacion de precio unitario por cantidad
}

console.log(calcularPrecio(5, 3)); // Imprime 15
console.log(calcularPrecio(10, 2)); // Imprime 20
console.log(calcularPrecio(7, 4)); // Imprime 28

function Puedesreservar(cantidadDeTazasXPersona){
    if (cantidadDeTazasXPersona <= 2){
        return true;
    } else{
        return false;
    }
    
}

 function TazasXDia(CantidadMaximaDeTazasXDia, TotalDETazasReservasHoy){
     if (TotalDETazasReservasHoy <= CantidadMaximaDeTazasXDia){
         return true;
     }else{
        return false;
    }

 }
    const cantidadDeTazasXPersona = 2; // cantidad de tazas que desea reservar
    const CantidadMaximaDeTazasXDia = 50; // cantidad máxima de tazas por día
    const TotalDeTazasREservadas = 51; // cantidad total de tazas reservadas

    if (TazasXDia(CantidadMaximaDeTazasXDia, TotalDeTazasREservadas)){
        console.log("Aún tenemos tazas disponibles para reservar")
    } else{
        console.log("No hay tazas disponibles para reservar")
    }
    if (Puedesreservar(cantidadDeTazasXPersona)){
        console.log("Puedes reservar tus tazas, gracias por tu preferencia")
    } else{
        console.log("No puedes reservar tus tazas en este momento")
    }

    
