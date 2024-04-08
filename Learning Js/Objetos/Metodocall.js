let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

//Uso de call para usar el metodo personal1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto());
//Se toman los nombres de los atributos por el metodo call
console.log(persona1.nombreCompleto.call(persona2));
