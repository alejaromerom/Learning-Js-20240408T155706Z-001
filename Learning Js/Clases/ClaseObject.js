class Persona {
  // Atributos estaticos en Javascrip0t
  //un atributo que pertenece. la clse, no. alos objetos
  static contadorObjetosPersonan = 0;
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
  //Estamos aplicadndo polimorfismo a partir de este metofo tostring
  //La clase padre es Object
  //To string se hereda a empleado
  // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
  toString() {
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("saludos desde método static");
  }
  //en este caso estamos llando un nombre eb especifico
  static saludar2(persona) {
    console.log(persona.nombre + "" + persona.apellido);
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
console.log(empleado1.toString());

//como llamar un objeto desd euna clse
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersonan);
console.log(Persona.contadorObjetosPersonan);
console.log(Empleado.contadorObjetosPersonan);
