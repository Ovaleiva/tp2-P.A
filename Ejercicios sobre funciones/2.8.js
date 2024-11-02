function procesarArray(arr, funcion) {
  return arr.map(funcion);
}
function duplicar(num) {
  return num * 2;
}
console.log(procesarArray([1, 2, 3, 4], duplicar));
