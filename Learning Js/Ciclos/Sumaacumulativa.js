//Realizar la suma de los primeros 5 numeros
let maximo = 5,
  acumuladorSuma = 0;
for (let numero = 1; numero <= maximo; numero++) {
  //Realizar la suma parcial
  acumuladorSuma += numero;
  console.log(acumuladorSuma);
}

console.log("Acumulador suma:", acumuladorSuma);
