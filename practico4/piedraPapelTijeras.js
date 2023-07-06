/*2. Crea una función llamada obtenerJugadaComputadora que generará un número aleatorio entre 0 y 2 para representar las opciones:
    - 0 para "piedra",
    - 1 para "papel" y
    - 2 para "tijeras"
Siempre utilizando los valores de strings y no los valores númericos.
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

3. Crea una función llamada obtenerJugadaUsuario que solicitará al usuario ingresar su elección a través de la consola.
Los valores posibles son: piedra, papel o tijeras.
const readlineSync = require('readline-sync');

function obtenerJugadaUsuario () {
    let eleccion = readlineSync.question("Elija su jugada. Los valores posibles son: piedra, papel o tijeras\n");
    jugadaUsuario = eleccion
    return jugadaUsuario
}

4. Crea una función llamada determinarGanador que tomará como parámetros las jugadas de la computadora y del usuario. 
Implementa las reglas del juego para determinar el ganador y retorna el resultado.
function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){
        return resultado = "Empate"
    } else if ((jugada1 == "piedra" && jugada2 == "papel") || (jugada1 == "papel" && jugada2 == "tijeras") || (jugada1 == "tijeras" && jugada2 == "piedra")) {
            return resultado = "Gana la computadora"
    } else if ((jugada1 == "piedra" && jugada2 == "tijeras") || (jugada1 == "papel" && jugada2 == "piedra") || (jugada1 == "tijeras" && jugada2 == "papel")) {
            return resultado = "Gana el usuario"
    }
}
5. Llama a las funciones en el orden adecuado para ejecutar el juego:
    a) Invoca la función obtenerJugadaComputadora y almacena el resultado en una variable.
    b) Invoca la función obtenerJugadaUsuario y almacena el resultado en otra variable.
    c) Invoca la función determinarGanador pasando como argumentos las jugadas de la computadora y del usuario. Almacena el resultado en una variable.
obtenerJugadaComputadora ();
obtenerJugadaUsuario ();
determinarGanador (jugadaUsuario, jugadaComputadora);

6. Imprime por pantalla el resultado del juego utilizando la función console.log(). El mensaje debe indicar la jugada de la computadora, la jugada del usuario y 
el resultado del juego (quién ganó o si fue un empate). Se debe respetar el siguiente formato dependiendo del resultado:
console.log("La computadora eligio: %s.", jugadaComputadora);
console.log("El usuario eligio: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", resultado);

EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el código para su correcta utilización.*/
const readlineSync = require('readline-sync');
const jugadas = ["piedra", "papel", "tijeras"];
let jugadaComputadora;
let jugadaUsuario;
let resultado;
let eleccion;

function obtenerJugadaComputadora () {
    jugadaComputadora = jugadas[Math.floor(Math.random() * 3)];
    return jugadaComputadora;      
}

function obtenerJugadaUsuario () {
    eleccion = readlineSync.question("Elija su jugada. Los valores posibles son: piedra, papel o tijeras\n");
    while (!(jugadas.includes(eleccion.toLowerCase()))){
        console.clear();
        eleccion = readlineSync.question("Jugada invalida. Vuelva a elegir su jugada.\nLos valores posibles son: piedra, papel o tijeras\n");
    }
    jugadaUsuario = eleccion.toLowerCase();
    return jugadaUsuario;
}

function determinarGanador (jugada1, jugada2) {
    if (jugada1 == jugada2){
        return resultado = "Empate"
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[1]) || (jugada1 == jugadas[1] && jugada2 == jugadas[2]) || (jugada1 == jugadas[2] && jugada2 == jugadas[0])) {
            return resultado = "Gana la computadora"
    } else if ((jugada1 == jugadas[0] && jugada2 == jugadas[2]) || (jugada1 == jugadas[1] && jugada2 == jugadas[0]) || (jugada1 == jugadas[2] && jugada2 == jugadas[1])) {
            return resultado = "Gana el usuario"
    }
}

obtenerJugadaComputadora ();
obtenerJugadaUsuario ();
determinarGanador (jugadaUsuario, jugadaComputadora);

console.log("La computadora eligio: %s.\nEl usuario eligio: %s.\nEl resultado fue: %s.", jugadaComputadora, jugadaUsuario, resultado);

/*EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego, es decir:
    Una jugada: gana el ganador de esa única jugada.
    Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que el usuario gane una jugada y la computadora la otra.
    Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.*/
