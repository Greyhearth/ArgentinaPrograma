//2. ¿De qué manera representaría las variables del ejercicio anterior en un objeto, llamémosle persona?
//a. Defina una variable de tipo objeto que lleve el nombre persona, y que contenga las variables nombre, apellido y edad del ejercicio anterior con sus respectivos valores.
let persona = {nombre: "Gustavo", apellido: "Grisetti", edad: 30};

//b. Imprime por consola un mensaje que respete el siguiente formato:
console.log("Mi objeto persona es el siguiente: "+ JSON.stringify(persona));
//revisar la función JSON.stringify