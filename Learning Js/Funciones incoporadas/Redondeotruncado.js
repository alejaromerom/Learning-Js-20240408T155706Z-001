//Redondeo y truncado Js
let numero = 8.5,
  redondeo,
  truncado;
//redondeo
//Math.round()redeondea al valor entero más cercano
//. 5 o superior , redondea al valor entero superior más cercano
redondeo = Math.round(numero);
console.log(redondeo);
//Truncado
//Math.trunc()elimina la parte dfoltante (decimal)
truncado = Math.trunc(numero);
console.log(truncado);
