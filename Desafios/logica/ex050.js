let matriz = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6]
];

let simetrica = true;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz.length; j++) {
    if (matriz[i][j] !== matriz[j][i]) {
      simetrica = false;
      break;
    }
  }
}

console.log("A matriz é simétrica?", simetrica);
