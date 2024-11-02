function obtenerPagina(datos, numeroPagina) {
  const elementosPorPagina = 5;
  const inicio = (numeroPagina - 1) * elementosPorPagina;
  return datos.slice(inicio, inicio + elementosPorPagina);
}
console.log(obtenerPagina([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
