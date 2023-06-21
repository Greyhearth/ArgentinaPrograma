/* queremos que tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de invitados. 
Pero no es tan fácil: no queremos dejar entrar a Jose y Sofia porque son codiciosos y groseros, 
¡y siempre se comen toda la comida! Tenemos dos listas, una para admitir invitados y otra para rechazar invitados.
La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y Emilia. */
let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let invitadosAdmitidos = [];
let invitadosRechazados = [];

/*Específicamente, queremos que:
● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
Deberá comenzar con un inicializador de let i = 0; pero ¿qué condición de salida necesita?
● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "Jose" o "Sofia" usando una declaración condicional:
- Si es así, concatene el elemento al arreglo de rechazados.
- Si no es así, concatene el elemento al arreglo de admitidos.*/
for (let i=0; i<personas.length ; i++) {
    if ((personas[i]=="Jose") || (personas[i]=="Sofia")){
        invitadosRechazados.push(personas[i]);
    } else {
        invitadosAdmitidos.push(personas[i]);
    }
}

/*● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de invitados admitidos y otra para imprimir la lista de invitados rechazados:
a. Para la lista de invitados admitidos deberás imprimir por consola un mensaje inicial que dirá: “La lista de invitados admitidos es:”, seguido por
tantos párrafos como tenga el arreglo admitidos conteniendo los respectivos nombres de los invitados.*/
for (let i=0; i<invitadosAdmitidos.length ; i++) {
    if (i==0){
        console.log("La lista de invitados admitidos es:");
        console.log(invitadosAdmitidos[i]);
    } else {
        console.log(invitadosAdmitidos[i]);
    }
}

/*b. Para la lista de invitados rechazados deberás imprimir por consola un mensaje inicial que dirá: "La lista de invitados rechazados es:”, seguido por
tantos párrafos como tenga el arreglo rechazados conteniendo los respectivos nombres de los invitados.*/
for (let i=0; i<invitadosRechazados.length ; i++) {
    if (i==0){
        console.log("La lista de invitados rechazados es:");
        console.log(invitadosRechazados[i]);
    } else {
        console.log(invitadosRechazados[i]);
    }
}

/*● EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
“ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos deberás imprimir: “La lista ordenada de invitados admitidos es:”. */

