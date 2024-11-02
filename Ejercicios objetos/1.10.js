libro = {
  titulo: "Ted",
  autor: "Stephen King",
  _añoDePublicacion: 2009,
  get añoDePublicacion() {
    return this._añoDePublicacion;
  },
  set añoDePublicacion(nuevoAño) {
    this._añoDePublicacion = nuevoAño;
  },
};
libro.añoDePublicacion = 2010;
console.log(libro.añoDePublicacion);
