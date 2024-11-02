async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();
    console.log(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}
obtenerUsuarios();
