const cupoCat = 8; //const cupoCat = 8; //cantidad de cupos disponibles
const inscritos = 5;//cantidad de inscritos

//condicional para verificar si hay cupos disponibles

if (cupoCat > inscritos) {
    console.log("Hay Cupos, Abrir el registro");
} else{
    console.log("No hay Cupos, Ofrecer otra fecha");
}

//opredores de cpparacion
8 > 5 //true
3 < 10 //true   
8 >= 8 //true
5 <= 3 //false
10 === 10 //true
10 !== 5 //true

const tazasReservadasHoy = 25;
const maxTazasReservadas = 45;

if (tazasReservadasHoy >= maxTazasReservadas) {
    console.log("Cerrar Reservas, No hay Tazas Disponibles");
} else{
    console.log("Aún tenemos reservaciones disponibles");
}

const tazasResevadas = 0

if (tazasResevadas < 1){
    console.log("No Puedes reservar menos de 1 taza.");
    return;
}

if (tazasResevadas > 2){
    console.log("No puedes recervara tazas, ya que el máximo es de 2 por persona");
} else{
    console.log("Reservacion exitosa");

}
