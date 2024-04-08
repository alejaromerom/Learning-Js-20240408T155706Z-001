//Funciones Incorporadas

// Obtener el largo de una cadena
let cadena1 = "hola";
cadena1.length;

console.log(cadena1.length);

// No podemos modificar una cadena en Javascript
//Estas son inmutables
cadena1[0] = "x";
console.log(cadena1);

//si podemos asignar una nueva cadaena
cadena1 = "Adios";
console.log(cadena1);

//Recorrer cada uno de los caracteres }
for (let i = 0; i < cadena1.length; i++) {
  console.log(`${i}- ${cadena1[i]}`);
}
