// ex031. =>Faça um programa que calcule a média dos valores em uma matriz.  

const matriz = [
  [4, 6, 8],
  [2, 7, 3],
  [9, 1, 5]
];

let soma = 0;
let totalElementos = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
    totalElementos++;
  }
}

const media = soma / totalElementos;
console.log("Média dos valores:", media);


// Explicação:
// - Percorremos a matriz com dois for.
// - Somamos todos os valores.
// - Contamos quantos elementos existem.
// - Dividimos a soma pela quantidade para obter a média.