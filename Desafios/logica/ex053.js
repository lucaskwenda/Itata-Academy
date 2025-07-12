//ex053 = Multiplicar todos os elementos de uma matriz por um número X

let X = 3;
let matriz = [
  [1, 2],
  [3, 4]
];

let novaMatriz = matriz.map(linha => linha.map(valor => valor * X));
console.table(novaMatriz);
