function filtrarMayoresDe(arr, valor) {
  return arr.filter((num) => num > valor);
}

let numeros = [5, 10, 15, 20];
console.log(filtrarMayoresDe(numeros, 10));
