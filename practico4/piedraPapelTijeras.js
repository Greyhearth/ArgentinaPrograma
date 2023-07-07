//VERSION FINAL: dejo en forma de comentario todo lo que ha sido modificado por los ejercicios Extra 1 y 2

/*2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
    - 0 para "piedra",
    - 1 para "papel" y
    - 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.*/

/*
let jugadaComputadora;
let jugadaUsuario;
let resultado;

function obtenerJugadaComputadora () {
    let numeroEnteroAlAzar = Math.floor(Math.random() * 3)
    switch (numeroEnteroAlAzar) {
        case 0:
            jugadaComputadora = "piedra";
            break;
        case 1:
            jugadaComputadora = "papel";
            break;
        case 2:
            jugadaComputadora = "tijeras";
            break;
    }
    return jugadaComputadora      
}
*/

/*3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su elección a través de la consola.
Los valores posibles son: piedra, papel o tijeras.*/

const readlineSync = require('readline-sync');

/*
function obtenerJugadaUsuario () {
    let eleccion = readlineSync.question("Elija su jugada. Los valores posibles son: piedra, papel o tijeras\n");
    jugadaUsuario = eleccion
    return jugadaUsuario
}
*/

/*4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas de la computadora y del usuario. 
Implementa las reglas del juego para determinar el ganador y retorna el resultado.*/

/*
function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){
        return resultado = "Empate"
    } else if ((jugada1 == "piedra" && jugada2 == "papel") || (jugada1 == "papel" && jugada2 == "tijeras") || (jugada1 == "tijeras" && jugada2 == "piedra")) {
            return resultado = "Gana la computadora"
    } else if ((jugada1 == "piedra" && jugada2 == "tijeras") || (jugada1 == "papel" && jugada2 == "piedra") || (jugada1 == "tijeras" && jugada2 == "papel")) {
            return resultado = "Gana el usuario"
    }
}
*/

/*5. Llama a las funciones en el orden adecuado para ejecutar el juego:
    a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
    b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
    c) Invoca la función determinarGanador pasando como argumentos las jugadas de la computadora y del usuario. Almacena el resultado en una variable.*/

/*
obtenerJugadaComputadora ();
obtenerJugadaUsuario ();
determinarGanador (jugadaUsuario, jugadaComputadora);
*/

/*6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje debe indicar la jugada de la computadora, la jugada del usuario y 
el resultado del juego (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del resultado:*/

/*
console.log("La computadora eligio: %s.", jugadaComputadora);
console.log("El usuario eligio: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", resultado);
*/

/*EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el código para su correcta utilización.*/
const jugadas = ["piedra", "papel", "tijeras"];
let jugadaComputadora;
let jugadaUsuario;
let resultado;
let eleccion;

function obtenerJugadaComputadora () {
    jugadaComputadora = jugadas[Math.floor(Math.random() * 3)]; //en base a un número aleatorio multiplicado por 3 y redondeado hacia abajo, elige un elemento del array jugadas
    return jugadaComputadora;      
}

function obtenerJugadaUsuario () {
    eleccion = readlineSync.question("Elija su jugada. Los valores posibles son: piedra, papel o tijeras\n");       //solicita el ingreso de la jugada al usuario
    while (!(jugadas.includes(eleccion.toLowerCase()))){                                                            //inicia un bucle si la jugada es invalida. El .toLowerCase es para evitar considerar un error el uso de mayusculas
        console.clear();                                                                                            //limpia la consola simplemente para no saturarla de mensajes de error
        eleccion = readlineSync.question("Jugada invalida. Vuelva a elegir su jugada.\nLos valores posibles son: piedra, papel o tijeras\n");   //vuelve a solicitar la jugada al usuario si no era válida
    }
    jugadaUsuario = eleccion.toLowerCase();                                                                         //la variable se modifica con el ingreso en minúsculas para poder comparar luego
    return jugadaUsuario;
}

function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){                                                                                        //primero corrobora un empate
        contadorEmpates++                                                                                           //agregado un contador para ser usado en el ejercicio Extra 2
        return resultado = "Empate";
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[1]) || (jugada1 == jugadas[1] && jugada2 == jugadas[2]) || (jugada1 == jugadas[2] && jugada2 == jugadas[0])) {  //modificado para usar el array jugadas
            contadorComputadora++                                                                                   //agregado un contador para ser usado en el ejercicio Extra 2
            return resultado = "Gana la computadora";
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[2]) || (jugada1 == jugadas[1] && jugada2 == jugadas[0]) || (jugada1 == jugadas[2] && jugada2 == jugadas[1])) {  //modificado para usar el array jugadas
            contadorJugador++                                                                                       //agregado un contador para ser usado en el ejercicio Extra 2
            return resultado = "Gana el usuario";
    }
}

/*
obtenerJugadaComputadora ();
obtenerJugadaUsuario ();
determinarGanador (jugadaUsuario, jugadaComputadora);

console.log("La computadora eligio: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaComputadora, jugadaUsuario, resultado);
*/

/*EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego, es decir:
    Una jugada: gana el ganador de esa única jugada.
    Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que el usuario gane una jugada y la computadora la otra.
    Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.*/
let contadorJugador = 0;
let contadorComputadora = 0;
let contadorEmpates = 0;
let resultadoGlobal;

function numeroRondas (){
    console.clear();
    let numeroRondas = readlineSync.question("Elija la cantidad de rondas a jugar: ");                  //solicitar al usuario ingresar el numero de rondas/partidas a jugar
    while (isNaN(numeroRondas) || numeroRondas < 1 ){                                                   //verifica que sea un número mayor a 0 para establecer las rondas
        console.clear();
        numeroRondas = readlineSync.question("Opcion invalida. Elija un numero entero positivo de rondas a jugar: ");
    }
    if (numeroRondas==1){                                                                               //simplemente replica el punto 5 y 6 del práctico si se trata de 1 ronda
        obtenerJugadaComputadora ();
        obtenerJugadaUsuario ();
        determinarGanador (jugadaUsuario, jugadaComputadora);
        console.log("La computadora eligio: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaComputadora, jugadaUsuario, resultado);
    } else {                                                                                            //si hay más de 1 ronda, ejecuta un código diferente
        for (let i = 1; i<=numeroRondas ; i++) {                                                        //el "for" repetirá el código del punto 5 y 6 hasta que el iterador alcance el numero de ronda elegidas
            console.log("Rondas a jugar: %s\nEsta es la ronda: %i\nVictorias del Usuario: %i\nVictorias de la Computadora: %i\nEmpates: %i", numeroRondas, i, contadorJugador, contadorComputadora, contadorEmpates);   //agregado un contador de rondas y resultados parciales
            obtenerJugadaComputadora ();
            obtenerJugadaUsuario ();
            determinarGanador (jugadaUsuario, jugadaComputadora);
            console.log("La computadora eligio: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaComputadora, jugadaUsuario, resultado);
        }
        if (contadorJugador==contadorComputadora){                                                      //compara los contadores de victorias para determinar el resultado global/final
            resultadoGlobal = "Empate";
        } else if (contadorJugador<contadorComputadora){
            resultadoGlobal = "Gana la computadora";
        } else if (contadorJugador>contadorComputadora){
            resultadoGlobal = "Gana el jugador";
        }
        console.log("El resultado global fue: %s", resultadoGlobal);                                    //muestra el resultado global/final
    }
}

numeroRondas()