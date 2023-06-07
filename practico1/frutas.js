//5. Manejo de arreglos: ... crear un programa y guardarlo en el archivo frutas.js que cumpla ...:
//a. Crea un arreglo vacío con el nombre de frutas.
let frutas = [];

//b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de variables o no.
frutas.push("manzana", "banana", "naranja", "durazno", "uvas");

//c. ... obtener el última fruta agregada y guardarla en la variable ultima.
let ultima = frutas[(frutas.length)-1];

//Además deberás imprimir su valor por consola, respetando el siguiente formato
console.log("La ultima fruta agregada fue: "+ultima);

//Deberás obtener la primera fruta agregada y guardarla en la variable primera. 
let primera = frutas[0];

//Además deberás imprimir su valor por consola, respetando el siguiente formato:
console.log("La primera fruta agregada fue: "+primera);