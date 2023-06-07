//3. Operadores aritméticos:
//a. Crea cuatro variables que contengan valores numéricos.
let var1 = 12;
let var2 = 10;
let var3 = 4;
let var4 = 2;

//b. Suma las dos primeras variables y guarda el resultado en otra variable.
let sumaVar = var1+var2;

//c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
let restaVar = var3-var4;

//d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada resultadoFinal.
//El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
let resultadoFinal = sumaVar*restaVar;

//e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar.
let esPar = resultadoFinal % 2 === 0;

//f. Imprima por consola un mensaje ...:
console.log("Mis variables iniciales fueron: "+var1+", "+var2+", "+var3+" y "+var4+". La respuesta a verificar si el resultado final es par es: "+esPar);