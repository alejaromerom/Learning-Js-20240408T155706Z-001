//Funciones recursivas eb JS
//Imprimir numeros 3, 2,1

function funcionRecursiva(numero) {
  //caso Base
  if (numero == 1) console.log(numero);
  else {
    console.log(numero);
    funcionRecursiva(numero - 1);
  }
}
//cada vez que llamemos a nuestra función recursiva reduce a 1
// llamamos la función recursiva

funcionRecursiva(3);
//1. Ejecutamos por primera vvez la funció
// se pasa una copia y tenemos el valor de 3
// en el else se manda a imprimir el 3
// en la linea (numero-1) se pone en pausa y el parametro es = a 2
//se ponen en pausa de 3 y 2 y ahora vale 1
// llamar una función a si misma
