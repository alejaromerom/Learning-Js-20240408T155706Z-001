//Funcion constructor de objetos de tipo Persona
//Argumentos y parametros
//Metodo contructor
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  //Funcion constructor de objetos tipo persona
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

// nuevo llamamiento
let padre = new Persona("juan", " Perez", " jperez@mail.com");
console.log(padre.nombreCompleto());
//los cambios que se hagan el objeto padre , solo afectan a este no al objeto madre
// let padre = new Persona("Juan", "Perez", "jperez@mail.com");
// console.log(padre);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre);

padre.nombre = "Carlos";

console.log(padre);
console.log(madre);
