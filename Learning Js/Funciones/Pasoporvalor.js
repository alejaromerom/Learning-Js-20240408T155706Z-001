//Paso por valor
//Pasando información de tipo primitivo (number,bool,string)

function cambiarValor(parametro) {
  parametro = 20;
}
// los cambios no se reflejan en la función principal , se le pasó la copia se destruye en el parametro
// se le pasa a la variable más externa

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);
