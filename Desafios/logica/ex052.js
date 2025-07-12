// ex051 = Trocar a 1ª linha com a 3ª linha de uma matriz 3x3

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

[matriz[0], matriz[2]] = [matriz[2], matriz[0]];

console.table(matriz);
