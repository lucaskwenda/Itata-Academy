//ex055 =  Calcular a média dos elementos por linha

let matriz = [
  [2, 4, 6],
  [1, 3, 5],
  [7, 8, 9]
];

matriz.forEach((linha, index) => {
  let media = linha.reduce((soma, v) => soma + v, 0) / linha.length;
  console.log(`Média da linha ${index + 1}: ${media.toFixed(2)}`);
});


