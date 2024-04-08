//Paso por referencia
//Objetos (Array) se pasan por referencia

function cambiarValor(parametro) {
  parametro[0] = 20;
}

//Llamamos a la función, imprime lo que se almacena en memoria
let arreglo = [10];

console.log(`Antes función: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`Despues de funcion: ${arreglo[0]}`);
