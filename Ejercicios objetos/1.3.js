const libro = {
  titulo: "Ted",
  autor: "Stephen King",
  "año de publicación": 2009,

  descripcion: function () {
    return `El libro "${this.titulo}" fue escrito por ${this.autor}.`;
  },
};

console.log(libro.descripcion());

console.log("Título: ", libro.titulo);
console.log("Autor: ", libro.autor);
console.log("Año de publicación: ", libro["año de publicación"]);
