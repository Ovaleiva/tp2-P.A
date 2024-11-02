async function imprimirNombresDeUsuarios() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  const nombres = usuarios.map((usuario) => usuario.name);
  console.log(nombres);
}
imprimirNombresDeUsuarios();
