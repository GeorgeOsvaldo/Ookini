console.log("Hola, Buenvenido a la Cafeteria de Osvaldo")
console.log("¿Como te llamas?")
console.log("¿Cuantas tazas deseas reservar?")
console.log("Esta bien, En un momente tendremos su pedido, gracias por su preferencia")
//Esto es repetitibo, pero pudemos hacer una lista para no escribir una linea por cada mensaje (Array)

//Array o lista de metodos
//Para almacenar varios valotres en una sola variable
const metodos = [
    "Hola, Buenvenido a la Cafeteria de Osvaldo",
    "¿Como te llamas?",
    "¿Cuantas tazas deseas reservar?",
    "Esta bien, En un momente tendremos su pedido, gracias por su preferencia"
];

//for es un bucle que nos permite repetir un bloque de codigo varias veces, en este caso, vamos a recorrer el array de metodos y imprimir cada uno de ellos en la consola
for (const Metodo of metodos){
    console.log(Metodo)// console.log es para imprimir en la consola, y metodo es el valor de cada elemento del array
}

const TotaltazasReservadas = [2,1 ,3 ,5, 8, 2, 1, 2, 3, ]; //array de tazas reservadas por cada persona, en este caso, tenemos 9 personas que han reservado tazas, y cada una ha reservado una cantidad diferente de tazas
let TotalTazas = 0; //let es una variable cambiante en base a su valor y en este caso se sumara

//for es el bucle que nos permite recorres en el array
for( const CantidadDeTazas of TotaltazasReservadas){
    TotalTazas = TotalTazas + CantidadDeTazas;// es la operacion que nos permita sumara la cantidad de las tazas reservadas en el día
console.log(TotalTazas);// imprime el total de tazas reservadas hasta el momento, en cada iteracion del bucle
}