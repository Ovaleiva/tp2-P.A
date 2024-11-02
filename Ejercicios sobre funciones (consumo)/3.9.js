function generarToken(usuario) {
  const token = btoa(JSON.stringify(usuario));
  return token;
}
console.log(generarToken({ nombre: "Carlos", email: "carlos@example.com" }));
