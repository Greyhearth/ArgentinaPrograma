//Cree un bucle de 10 a 0. Para cada iteración, imprima por consola usando console.log.
//Diferentes números de iteración requieren que se coloque un texto diferente en el párrafo para esa iteración (necesitará una declaración condicional):
for (let i = 10; ; i--) {
    if (i==10){
        console.log("Cuenta regresiva 10");     //Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.
    } else if (i<10 && i>0){
        console.log("%i",i);                         //Para cualquier otro número, imprima solo el número al párrafo.
    } else if (i==0){
        console.log("Lanzamiento!");                         //Si el número es 0, imprime "Lanzamiento!", al párrafo.
        break;
    }
}