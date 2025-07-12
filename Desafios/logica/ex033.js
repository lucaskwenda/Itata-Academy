//ex033 =>.Escreva um programa que inverta a ordem dos elementos em um vetor. 

const vetor = [10, 20, 30, 40, 50];
const tamanho = vetor.length;

for (let i = 0; i < Math.floor(tamanho / 2); i++) {
  let temp = vetor[i];
  vetor[i] = vetor[tamanho - 1 - i];
  vetor[tamanho - 1 - i] = temp;
}

console.log('Vetor invertido:', vetor);


// Explicação:
// - Troca os elementos do início com os do fim, até o meio do vetor.
// - Math.floor(tamanho / 2) garante que percorres apenas até a metade, evitando repetir a troca.