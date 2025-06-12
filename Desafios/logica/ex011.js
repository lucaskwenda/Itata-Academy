// ex011 => Escreva um algoritmo para ler o salário atual de um funcionário e o percentual de reajuste, calcular e escrever o valor do novo salário.

// Entrada de dados
let salarioAtual = 50000; // por exemplo, 50.000 Kz
let percentualReajuste = 10; // por exemplo, 10%

// Cálculo do novo salário
let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);

// Saída
console.log(`O novo salário é ${novoSalario} Kz`);


// Explicação:

// - salarioAtual * percentualReajuste / 100 calcula o valor do aumento.
// - Soma-se esse valor ao salário atual para obter o novo salário.