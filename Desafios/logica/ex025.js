// Faça um programa que calcule a soma dos números de 1 a N. 

function calcularSomaAteN(N) {
  let soma = 0; // Inicializa a variável de soma

  // Loop para somar os números de 1 até N
  for (let i = 1; i <= N; i++) {
    soma += i; // Adiciona o valor de i à soma
  }

  return soma; // Retorna o resultado da soma
}
// Exemplo de uso
const N = 10; // Substitua pelo valor desejado
const resultado = calcularSomaAteN(N);
console.log(`A soma dos números de 1 a ${N} é: ${resultado}`);
// Explicação:
// - A função `calcularSomaAteN` recebe um número N como parâmetro. 
// - Inicializa uma variável `soma` com 0.
// - Utiliza um loop `for` para iterar de 1 até N, somando cada número à variável `soma`.
// - Após o loop, retorna o valor total da soma.
// - No exemplo, a função é chamada com N = 10, e o resultado é impresso no console.
