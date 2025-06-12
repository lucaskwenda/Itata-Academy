// ex014 => Escreva um algoritmo para ler o número de carros vendidos, o valor total das vendas, o salário fixo do vendedor e a comissão por carro vendido, calcular e escrever o salário final do vendedor. O salário final é obtido pela soma do salário fixo, a comissão por carro vendido e 5% do valor total das vendas.

const carrosVendidos = 10;         // Número de carros vendidos
const valorTotalVendas = 300000;   // Valor total das vendas
const salarioFixo = 50000;         // Salário fixo mensal
const comissaoPorCarro = 10000;    // Comissão por carro vendido

// Cálculo do salário final
const comissaoTotal = carrosVendidos * comissaoPorCarro;
const porcentagemVendas = valorTotalVendas * 0.05;
const salarioFinal = salarioFixo + comissaoTotal + porcentagemVendas;

// Saída
console.log(`O salário final do vendedor é: ${salarioFinal} kz`);


// Explicação:
// - Soma-se o salário fixo + comissão por carro vendido + 5% do total das vendas.
// - O resultado é o salário final do vendedor.