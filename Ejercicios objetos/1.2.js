const estudiante = {
  nombre: "Osvaldo",
  edad: 22,
  dirección: {
    calle: "Urquiza 11",
    ciudad: "Concepcion del Uruguay",
    país: "Argentina",
  },
};
console.log("direccion del estudiante");
console.log(
  estudiante.dirección.calle +
    ", " +
    estudiante.dirección.ciudad +
    ", " +
    estudiante.dirección.pais
);
