//cadenas y funciones en Js
//Cadenas inmutables en Js(No se puede modificar su valor)

function cambiarValor(parametro) {
  parametro = "Adios";
}

//llamamos a la función
let argumento = "Hola";
console.log(`Antes función: ${argumento}`);
cambiarValor(argumento);
console.log(`Despues función: ${argumento}`);
