class Persona {
  //cuerpo de la clase
  constructor(nombre, apellido) {
    //se asigna una propiedad
    //parametro y argumento
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
//objetos

let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let persona2 = new Persona("Carlos", "Lara");
console.log(persona2);
