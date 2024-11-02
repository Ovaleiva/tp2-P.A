async function mapearUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  const usuariosMapeados = usuarios.map((usuario) => ({
    nombre: usuario.name,
    email: usuario.email,
  }));
  console.log(usuariosMapeados);
}
mapearUsuarios();
