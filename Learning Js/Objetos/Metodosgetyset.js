let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@mail.com",
  edad: 28,
  idioma: "es",
  get lang() {
    //idioma
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};
// Acceder al objeto utilizando get
console.log(persona.lang);
//Metodos set
persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);
