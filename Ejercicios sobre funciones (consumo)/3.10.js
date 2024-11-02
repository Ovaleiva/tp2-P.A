function actualizarUsuario(usuario, cambios) {
  return { ...usuario, ...cambios };
}
const usuarioOriginal = {
  nombre: "Osvaldo",
  email: "ovaleiva16@gmail.com",
  edad: 22,
};
console.log(
  actualizarUsuario(usuarioOriginal, {
    edad: 23,
    ciudad: "Concepcion del Uruguay",
  })
);
