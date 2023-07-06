/*2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
    - 0 para "piedra",
    - 1 para "papel" y
    - 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.*/
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

/*3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su elección a través de la consola.
Los valores posibles son: piedra, papel o tijeras.*/
const readlineSync = require('readline-sync');

function obtenerJugadaUsuario () {
    let eleccion = readlineSync.question("Elija su jugada:\n   piedra\n   papel\n   tijeras\n");
    jugadaUsuario = eleccion
    return jugadaUsuario
}

/*4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas
de la computadora y del usuario. Implementa las reglas del juego para determinar el
ganador y retorna el resultado.*/
function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){
        return resultado = "Empate"
    } else if (jugada1 == "piedra") {
        if (jugada2 == "papel"){
            return resultado = "Gana la computadora"
        }
        else if (jugada2 == "tijeras") {
            return resultado = "Gana el usuario"
        }
    } else if (jugada1 == "papel") {
        if (jugada2 == "tijeras"){
            return resultado = "Gana la computadora"
        }
        else if (jugada2 == "piedra") {
            return resultado = "Gana el usuario"
        }
    } else if (jugada1 == "tijeras") {
        if (jugada2 == "piedra"){
            return resultado = "Gana la computadora"
        }
        else if (jugada2 == "papel") {
            return resultado = "Gana el usuario"
        }
    }
}
/*5. Llama a las funciones en el orden adecuado para ejecutar el juego:
    a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
    b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
    c) Invoca la función determinarGanador pasando como argumentos las jugadas de
    la computadora y del usuario. Almacena el resultado en una variable.*/
obtenerJugadaComputadora ();
obtenerJugadaUsuario ();
determinarGanador (jugadaUsuario, jugadaComputadora);
console.log("La computadora eligio: %s.", jugadaComputadora);
console.log("El usuario eligio: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", resultado);

/*6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje
debe indicar la jugada de la computadora, la jugada del usuario y el resultado del juego
(quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del
resultado:*/
