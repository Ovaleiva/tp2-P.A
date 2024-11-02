function validarFormulario(datos) {
    return datos.nombre && datos.email && datos.password ? true : false;
  }
  console.log(validarFormulario({ nombre: "Carlos", email: "carlos@example.com", password: "12345" })); 
  console.log(validarFormulario({ nombre: "Carlos", email: "", password: "12345" })); 
  