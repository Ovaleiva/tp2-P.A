let persona1 = { nombre: "Osvaldo", edad: 22 };
let persona2 = { ciudad: "Concepción del Uruguay", pais: "Argentina" };
let personaCombinada = Object.assign({}, persona1, persona2);
console.log(personaCombinada);
