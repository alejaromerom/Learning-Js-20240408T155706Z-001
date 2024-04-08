class Persona {
  //cuerpo de la clase
  constructor(nombre, apellido) {
    //se asigna una propiedad
    //parametro y argumento
    this.nombre = nombre;
    this.apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  //Se modicia el nombre del atributo
  set nombre(nombre) {
    this._nombre = nombre;
  }
}
//objetos

let persona1 = new Persona("Juan", "Perez");
persona1.nombre = "Juan Carlos"; //manda a llamar el set nombre
console.log(persona1.nombre);
