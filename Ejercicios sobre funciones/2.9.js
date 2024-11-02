function crearMultiplicador(x) {
  return function (y) {
    return x * y;
  };
}
let multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(5));
