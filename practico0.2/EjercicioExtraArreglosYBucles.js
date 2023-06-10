//1. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
//     de personas invitadas a una fiesta y agregar los siguientes nombres:
let nombres = ["Carla", "Pedro", "Daiana", "Ivan", "Ivette", "Mario", "Vanesa"];

//2. Imprimir solo los nombres que terminen con la letra "a"
for (let i = 0; i < nombres.length; i++){
    if (nombres[i].charAt((nombres[i].length)-1) === "a") {
        console.log(nombres[i])
    }
}

//3. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
//     personas de la lista anterior, asignarle los siguientes valores
let apellidos = ["Gomez", "Gonzales", "Hernandez", "Suarez", "Gimenez", "Gomez", "Mendez"];

//4. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
//     y cuyo apellido empiece con "G"
for (let i = 0; i < apellidos.length; i++){
    if ((nombres[i].charAt((nombres[i].length)-1) === "a")&&(apellidos[i].charAt(0) === "G")) {
        console.log(nombres[i]+" "+apellidos[i])
    }
}

//5. Crear un arreglo llamado "estadoInvitacion" que almacenara en formato
//      booleano (true o false) el estado de la invitacion de cada persona
//      invitada y asignarle los siguientes valores:
let estadoInvitacion = [true, false, true, true, true, false, true, false];

//6. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
//     tienen la invitación validada
for (let i = 0; i < estadoInvitacion.length; i++){
    if (estadoInvitacion[i]) {
        console.log(nombres[i].charAt(0)+". "+apellidos[i])
    }
}

//7. Imprimir todas las personas (inicial del nombre, apellido y estado de la invitacion) que cumplan con las condiciones del ejercicio 3, 4 y 6.
for (let i = 0; i <= 6; i++){
    if ((nombres[i].charAt((nombres[i].length)-1) === "a")&&(apellidos[i].charAt(0) === "G")&&(estadoInvitacion[i]==true)) {
        console.log(nombres[i].charAt(0)+". "+apellidos[i]+", "+estadoInvitacion[i])
    }
}

//(Todos los ejercicios que imprimen datos de las personas lo tiene que hacer en una linea por persona)
  
//Extras: (Arrrays y bucles anidados)
//   crear un array que contenga los tres arrays declarados y asignados
//   anteriormente
let personas = [nombres, apellidos, estadoInvitacion];

//1. ¿Cuantas posiciones tiene el nuevo array?
console.log("El nuevo arreglo tiene "+personas.length+" posiciones.");

//2. Repetir los ejercicios anteriores para este nuevo formato de arreglo
for (let j = 0; j < personas[0].length; j++){
    if (personas[0][j].charAt((personas[0][j].length)-1) === "a") {
        console.log(personas[0][j])
    }
}
for (let j = 0; j < personas[1].length; j++){
    if ((personas[0][j].charAt((personas[0][j].length)-1) === "a")&&(personas[1][j].charAt(0) === "G")) {
        console.log(personas[0][j]+" "+personas[1][j])
    }
}
for (let j = 0; j < personas[2].length; j++){
    if (personas[2][j]) {
        console.log(personas[0][j].charAt(0)+". "+personas[1][j])
    }
}
for (let j = 0; j < personas[0].length; j++){
    if ((personas[0][j].charAt((personas[0][j].length)-1) === "a")&&(personas[1][j].charAt(0) === "G")&&(personas[2][j])) {
        console.log(personas[0][j].charAt(0)+". "+personas[1][j]+", "+personas[2][j])
    }
}
