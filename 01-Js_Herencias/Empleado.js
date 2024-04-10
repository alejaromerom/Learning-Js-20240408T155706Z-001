class Empleado extends Persona {
  static contadorEmpleados = 0;
  constructor(sueldo) {
    this._idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }
  get _idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this.sueldo = sueldo;
  }

  toString() {
    return;
  }
}
