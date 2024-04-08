let matriz = [
  [100, 200, 300],
  [400, 500, 600],
];
// el largo del arreglo
//numero de renglones
console.log(matriz.length);
//Numero de columnas
//cuantos elementos tienen los renglones es decir las columnas del arreglo
console.log(matriz[0].length);
console.log(matriz[1].length);

// parte 2

// Renglones

for (let ren = 0; ren < matriz.length; ren++) {
  //columnas
  // Aquí me indicará los renglones a los cuales estoy accediendo es decir del arreglo
  for (let col = 0; col < matriz[ren].length; col++) {
    console.log`Elemento[${ren}] ${col}] = ${matriz[ren][col]}`;
  }
}
