// Ler 3 valores e escrever a soma dos 2 maiores.

const valor1 = 15; // Exemplo de valor 1
const valor2 = 25; // Exemplo de valor 2
const valor3 = 10; // Exemplo de valor 3
let maior1, maior2;
// Verifica qual é o maior valor
if (valor1 >= valor2 && valor1 >= valor3) {
  maior1 = valor1;
  maior2 = Math.max(valor2, valor3);
}
else if (valor2 >= valor1 && valor2 >= valor3) {
  maior1 = valor2;
  maior2 = Math.max(valor1, valor3);
} else {
  maior1 = valor3;
  maior2 = Math.max(valor1, valor2);
}
// Calcula a soma dos dois maiores valores
const somaMaiores = maior1 + maior2;
// Exibe o resultado
console.log(`A soma dos dois maiores valores é: ${somaMaiores}`);
// Explicação:
// - Compara os três valores para identificar os dois maiores.
// - Usa Math.max para encontrar o segundo maior entre os dois restantes.
// - Soma os dois maiores valores e exibe o resultado.
// - A lógica garante que sempre serão considerados os dois maiores valores, independentemente da ordem em que foram inseridos.