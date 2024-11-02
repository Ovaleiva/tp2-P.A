let copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
copiaEstudiante.edad = 22;
console.log(estudiante);
console.log(copiaEstudiante);
