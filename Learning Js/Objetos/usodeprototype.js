//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
//Se está modidicando a tos los contructores tipo Persona
Persona.prototype.tel = "44332211";
//Padre y madre heredan de la función persona  y también tendrarn esa propiedad que se ha cambiado
let padre = new Persona("Juan", "Perez", "jperez@mail.com");
padre.tel = "11223344";
console.log(padre.tel);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
madre.tel = "66889900";
console.log(madre.tel);
