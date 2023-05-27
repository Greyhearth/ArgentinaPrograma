/* 1. En el ejercicio 4 se pedía calcular el promedio de 3 números. Supongamos que ahora nos llegan otros tres 
datos y queremos calcular el promedio de los 6 números. ¿Qué modificaciones debemos hacerl al programa? */

// Ejercicio 4 original
    //let num1 = -1.2;
    //let num2 = 5.3;
    //let num3 = -3.3;
    //console.log((num1+num2+num3)/3);

let num1 = 2;
let num2 = 4;
let num3 = 6;
let num4 = 8;
let num5 = 10;
let num6 = 12;
console.log("el promedio es "+(num1+num2+num3+num4+num5+num6)/6);
// Devuelve 7 como resultado

// Otra posibilidad usando arreglos
let numeros = [2, 4, 6, 8, 10, 12]
let sumaNum = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4] + numeros[5]
console.log("el promedio es "+(sumaNum)/6);
// Devuelve el mismo valor que el anterior
