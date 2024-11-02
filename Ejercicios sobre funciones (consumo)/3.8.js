function buscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find((usuario) => usuario.email === email);
}
console.log(
  buscarUsuarioPorEmail(
    [
      { nombre: "Ana", email: "ana@example.com" },
      { nombre: "Luis", email: "luis@example.com" },
    ],
    "luis@example.com"
  )
);
