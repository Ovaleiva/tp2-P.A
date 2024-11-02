function autenticarUsuario(credenciales) {
  const usuarioPredefinido = { usuario: "admin", contraseña: "1234" };
  return (
    credenciales.usuario == usuarioPredefinido.usuario &&
    credenciales.contraseña == usuarioPredefinido.contraseña
  );
}
console.log(autenticarUsuario({ usuario: "admin", contraseña: "1234" }));
console.log(autenticarUsuario({ usuario: "user", contraseña: "abcd" }));
