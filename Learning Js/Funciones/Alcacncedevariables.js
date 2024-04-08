//Alcance de variables en JS
let variableGlobal = 5;
//Modificar el valor
variableGlobal = 10;
//definición función
function miFuncion(variableLocal) {
  console.log(variableLocal);
  //Modiifcamos la variable global
  //la local se destruye
  variableGlobal = 20;
  //No podemos redefinir una variable global (let)
  //let variableGlobal = 30;
}
//llamamos la función
// Se pasa una copia del valor
miFuncion(variableGlobal);
