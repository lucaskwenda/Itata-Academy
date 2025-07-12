// 52. Faça um programa que leia 10 valores e no final, escreva o maior e o menor valor 
// lido

const valores = [12, 5, 34, 7, 22, 89, 3, 44, 18, 27];

let maior = valores[0];
let menor = valores[0];

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maior) maior = valores[i];
  if (valores[i] < menor) menor = valores[i];
}

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor:${menor}`);