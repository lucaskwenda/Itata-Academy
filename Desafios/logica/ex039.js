
// ex063.=> Escreva um algoritmo que permita a leitura das notas de uma turma de 20 alunos.
// Calcular quantos alunos obtiveram nota acima desta média

const notas = [12, 15, 10, 8, 17, 14, 16, 9, 13, 11, 18, 10, 12, 14, 13, 15, 9, 16, 17, 14];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;

let acimaDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media) {
    acimaDaMedia++;
  }
}

console.log(`Média da turma: ${media.toFixed(2)}`);
console.log(`Alunos com nota acima da média:${acimaDaMedia}`);