class Cliente extends Persona {
  static contadorClientes = 0;

  contructor(fechaRegistro) {
    this._idCliente = ++Cliente.contadorClientes;
    this._fecharegistro = fechaRegistro;
  }
  //solo se obtiene el valor y no se modifica porque solo utilza get
  get _idCliente() {
    return this._idCliente;
  }

  get fechaRegistro() {
    return this._fecharegistro;
  }
  set fechaRegistro(fechaRegistro) {
    this._fecharegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
  }
}
