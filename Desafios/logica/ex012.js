// ex012 => Escreva um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. O custo final é obtido através da soma do custo de fábrica com 28% do custo de fábrica e 45% de impostos sobre o custo de fábrica.
// Entrada: custo de fábrica
const custoFabrica = 100000; // exemplo

// Percentuais fixos
const percentualDistribuidor = 28;
const percentualImpostos = 45;

// Cálculos
const valorDistribuidor = custoFabrica * (percentualDistribuidor / 100); 
const valorImpostos = custoFabrica * (percentualImpostos / 100); 
const custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

// Saída
console.log(`O custo final ao consumidor é: ${custoFinal} KZ`);


// Explicação:
// - Multiplicamos o custo de fábrica pelos percentuais para saber quanto será o valor do distribuidor e dos impostos.
// - Somamos tudo para obter o custo final ao consumidor.