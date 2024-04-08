let x = 10;
console.log(x.length);
//Todo tipo de valores
//crea objeto en memoria
//propiedades nombre, apellido, email etc
let persona = {
  nombre: "Juan",
  apellido: "perez",
  email: "jperez@mail.com",
  edad: 28,
  //Agregar metodos a objetos
  //this( Acceder a esas propiedades)
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
// acceder al metodo imprimir de esta manera: Ya que es una función
console.log(persona.nombreCompleto());
//accedemos  a este valor
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

//imprimir todo el objeto
console.log(persona);

//Crear un nuevo objeto
//Objeto en memoria vacio
//No es tan comun pero también funciona
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "Duran";
persona2.direccion = "calle 123";
persona2.tel = "444555";

console.log(persona2.tel);
