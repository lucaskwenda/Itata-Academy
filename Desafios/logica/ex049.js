// ex049 = Imprimir apenas a diagonal principal de uma matriz 3x3

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Diagonal principal:");
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i][i]);
}
