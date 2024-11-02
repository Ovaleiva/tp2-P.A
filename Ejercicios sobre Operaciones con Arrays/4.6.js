function sumarElementos(arr) {
  return arr.reduce((acumulador, num) => acumulador + num, 0);
}

let numeros = [1, 2, 3, 4];
console.log(sumarElementos(numeros));
