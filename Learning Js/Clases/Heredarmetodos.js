class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(nombre) {
    this._apellido = nombre;
  }
  nombreCompleto() {
    return this._nombre + " " + this._apellido;
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //Llamar al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobrescritura
  //se reutiliza el metodo
  nombreCompleto() {
    return super.nombreCompleto() + "," + this._departamento;
  }
}
let persona1 = new Persona("Juan", "Perez");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimez", "Sitemas");
console.log(empleado1);
//Este metodo se definió en la clase pacre pero se herada de la clase hija
//clase hija
console.log(empleado1.nombreCompleto());
//Sobreescritura
