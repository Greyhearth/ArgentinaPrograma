//2. Escriba un programa que solicite al usuario ingresar un número entero del 1 al 12 
//representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es marzo, etc.
const readlineSync = require('readline-sync');
let numeroMes = readlineSync.question("Ingrese un numero entero del 1 al 12: ");

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

if (numeroMes == 1 || numeroMes == 3 || numeroMes == 5 || numeroMes == 7 || numeroMes == 8 || numeroMes == 10 || numeroMes == 12 ){
    console.log("La cantidad de dias del mes de %s es 31",meses[numeroMes-1]);
} else if (numeroMes == 4 || numeroMes == 6 || numeroMes == 9 || numeroMes == 11 ){
    console.log("La cantidad de dias del mes de %s es 30",meses[numeroMes-1]);
} else if (numeroMes == 2 ){
    console.log("La cantidad de dias del mes de %s es 28",meses[numeroMes-1]);
}
