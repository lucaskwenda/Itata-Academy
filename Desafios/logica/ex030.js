// ex030. Crie um programa que encontre o maior elemento em um vetor.

function encontrarMaiorNumeroNoVetor(vetor) {
  if (vetor.length === 0) return null;

  let maior = vetor[0];

  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
  }

  return maior;
}

// Exemplo de uso:
const numeros = [5, 12, 8, 22, 3, 19];
console.log("Maior número:", encontrarMaiorNumeroNoVetor(numeros));

// Explicação:
// - Começa assumindo que o primeiro valor é o maior.
// - Percorre o vetor comparando cada número com o atual maior.
// - Atualiza o valor se encontrar um número maior.