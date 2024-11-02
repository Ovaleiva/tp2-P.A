const producto = {
  nombre: "Pantene",
  precio: 5400,
  disponibilidad: true,
};

for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}
