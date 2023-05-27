/* 2. Ya sabemos, gracias al ejercicio 3, convertir de Fahrenheit a Celsius. ¿Cómo hacemos la conversión 
de Celsius a Fahrenheit? */

// Ejercicio 3 original
    //let gradosF = 75;
    //console.log((gradosF-32)*(5/9));

    //Si gradosC            = (gradosF-32)*(5/9)
    //   gradosC/(5/9)      = gradosF-32
    //   gradosC/(5/9) +32  = gradosF
let gradosC = 36;
console.log("En grados Fahrenheit es "+(gradosC/(5/9)+32));
// Si gradosC es 30, devuelve 86 como resultado.
// Si gradosC es 36, devuelve 96.8 como resultado.

/* 3. Continuando con lo anterior, tenemos una tabla de las temperaturas medias por mes de los doce meses
en grados Fahrenheit; cómo hacemos para calcular el promedio anual en Celsius? */

let temperaturasMensualesMediaEnF = [70, 80, 75, 85, 72, 82, 77, 87, 71, 81, 79, 89];
let sumaTempMensEnF = temperaturasMensualesMediaEnF[0] + temperaturasMensualesMediaEnF[1] + temperaturasMensualesMediaEnF[2] + temperaturasMensualesMediaEnF[3] + temperaturasMensualesMediaEnF[4] + temperaturasMensualesMediaEnF[5] + temperaturasMensualesMediaEnF[6] + temperaturasMensualesMediaEnF[7] + temperaturasMensualesMediaEnF[8] + temperaturasMensualesMediaEnF[9] + temperaturasMensualesMediaEnF[10] + temperaturasMensualesMediaEnF[11];
let promedioTempEnF = sumaTempMensEnF/12;
console.log("El promedio anual de temperatura en grados Celsius es "+(promedioTempEnF-32)*(5/9));
// Con los valores de arriba, devuelve como promedio 26.11111111111111°C





