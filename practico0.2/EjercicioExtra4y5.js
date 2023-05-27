/* 4. Queremos representar un equipo de fútbol. Para ello necesitamos tener el nombre de cada jugader, su 
posición (arco, defensa, mediocampo, adelante) y su edad. ¿Cómo representamos cada jugador? ¿Cómo 
representamos un equipo? ¿Cómo representamos los 8 equipos que juegan el torneo? */

let jugadorA = {"Nombre":"jugadorA","Posicion":"arco", "Edad":26};
let jugadorB = {"Nombre":"jugadorB","Posicion":"defensa", "Edad":26};
let jugadorC = {"Nombre":"jugadorC","Posicion":"defensa", "Edad":26};
let jugadorD = {"Nombre":"jugadorD","Posicion":"defensa", "Edad":26};
let jugadorE = {"Nombre":"jugadorE","Posicion":"defensa", "Edad":26};
let jugadorF = {"Nombre":"jugadorF","Posicion":"mediocampo", "Edad":26};
let jugadorG = {"Nombre":"jugadorG","Posicion":"mediocampo", "Edad":26};
let jugadorH = {"Nombre":"jugadorH","Posicion":"mediocampo", "Edad":26};
let jugadorI = {"Nombre":"jugadorI","Posicion":"mediocampo", "Edad":26};
let jugadorJ = {"Nombre":"jugadorJ","Posicion":"adelante", "Edad":26};
let jugadorK = {"Nombre":"jugadorK","Posicion":"adelante", "Edad":26};


let equipoA = [{"Nombre":"Nombre del Equipo"},jugadorA,jugadorB,jugadorC,jugadorD,jugadorE,jugadorF,jugadorG,jugadorH,jugadorI,jugadorJ,jugadorK];
let equipoB = [];
let equipoC = [];
let equipoD = [];
let equipoE = [];
let equipoF = [];
let equipoG = [];
let equipoH = [];

let equiposTorneo = [{"Nombre":"Nombre del Torneo"},equipoA,equipoB,equipoC,equipoD,equipoE,equipoF,equipoG,equipoH];

console.log(jugadorA);
// Devuelve los datos de un jugador (Nombre, Posicion y Edad)
// Otra posibilidad:    
    // console.log(jugadorA.Nombre,jugadorA.Posicion,jugadorA.Edad);
    // Devuelve los datos solicitados del jugador

console.log(equipoA);
// Devuelve los datos de un equipo (Nombre del Equipo y la lista de sus jugadores con sus datos)

console.log(equiposTorneo);
// Devuelve los datos del torneo (Nombre del Torneo, la lista de sus equipos y la lista de jugadores de esos equipos)

// 5. ¿Hay que hacer algún cambio para representar un equipo de fútbol 7?

let equipo7 = [{"Nombre":"Nombre del Equipo 7"},jugadorA,jugadorB,jugadorC,jugadorD,jugadorF,jugadorG,jugadorK];

console.log(equipo7);
// Devuelve los datos del equipo de fútbol 7 (Nombre del Equipo y la lista de jugadores)