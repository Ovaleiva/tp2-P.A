function actualizarEdad(persona, nuevaEdad) {
  persona.edad = nuevaEdad;
}
let persona = { nombre: "Osvaldo", edad: 22 };
actualizarEdad(persona, 23);
console.log(persona);
