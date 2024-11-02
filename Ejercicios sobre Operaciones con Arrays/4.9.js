let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Carla", edad: 28 },
];
let mayorDe30 = personas.find((persona) => persona.edad > 30);
console.log(mayorDe30);
