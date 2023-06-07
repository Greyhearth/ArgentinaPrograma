//4.- ...crear un programa en el archivo cita.js. 
//...se te proporcionan dos variables, cita y substring, que contienen dos cadenas.
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

//Nos gustaría que:
//a.- Recuperes la longitud de la cita y la guardes en una variable llamada tamañoDeCita.
let tamañoDeCita = cita.length;

//...imprimir por consola un mensaje ...:
console.log("El tamaño de la cita es: "+tamañoDeCita);

//b.- Busques la posición del índice donde aparece substring en cita, y almacenes ese valor en una variable llamada indice.
let indice = cita.indexOf(substring);

//... imprimir por consola un mensaje ...:
console.log("El indice del substring es: "+indice);

//c.- ...recortar la cita original a "Tres tristes tigres comen trigo", y la guardes en una variable llamada citaRevisada.
let citaRevisada = cita.slice(0,(cita.indexOf(" en un trigal")));

//Por último, para verificar que el valor de citaRevisada es correcto, deberás imprimirla por consola.
console.log(citaRevisada);