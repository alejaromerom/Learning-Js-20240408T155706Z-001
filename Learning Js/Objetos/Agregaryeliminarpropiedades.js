let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@mail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

persona.tel = "55443322";
persona.tel = "44332211";

console.log(persona);

delete persona.tel;

console.log(persona);

//imprimir un objeto
//Concatenar cada valor de la propiedad
console.log(persona.nombre + " , " + persona.apellido);

//for in
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personString = JSON.stringify(persona);
console.log(personString);
