//ex51 = Encontrar o maior valor da matriz e sua posição

let matriz = [
  [4, 8, 1],
  [9, 3, 2],
  [7, 6, 5]
];

let maior = matriz[0][0];
let pos = [0, 0];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maior) {
      maior = matriz[i][j];
      pos = [i, j];
    }
  }
}

console.log(`Maior valor: ${maior}, posição: linha ${pos[0]}, coluna ${pos[1]}`);
