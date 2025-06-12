// ex006 => Implemente um programa que calcula o preço final de um produto com base em 
// descontos (valor) e percentagem. 

// A fórmula para calcular o preço final com desconto é:

// Preço final = Preço original − Valor do desconto

// Ou, se o desconto for em percentual:

// Preço final = Preço original × (1 − (Desconto (%) ÷ 100))

// Exemplo com valor:  
// Preço original = 10.000 KZ  
// Desconto = 2.000 KZ  
// Preço final = 10.000 − 2.000 = 8.000 KZ

// Exemplo com percentual:  
// Preço original = 10.000 KZ  
// Desconto = 20%  
// Preço final = 10.000 × (1 − 0.20) = 10.000 × 0.80 = 8.000 KZ
// Se o desconto for em *valor*:
function calcularPrecoFinal(precoOriginal, desconto) {
  const precoFinal = precoOriginal - desconto;
  return precoFinal;
}

// Exemplo de uso:
const preco = 10000;
const desconto = 2000;
const final = calcularPrecoFinal(preco, desconto);
console.log(`Preço final: ${final} KZ`);


// Ou, se o desconto for em *percentagem*:
function calcularPrecoFinalComPercentual(precoOriginal, percentual){
  const precoFinal = precoOriginal * (1 - (percentual / 100)); // vai embaixo para ver o que está linha faz
  return precoFinal;
}

// Exemplo:
const preco1 = 10000;
const percentualDesconto = 20;
const final1 = calcularPrecoFinalComPercentual(preco, percentualDesconto);
console.log(`Preço final com percentagem: ${final} KZ`);


// A linha:  const precoFinal = precoOriginal * (1 - (percentual / 100));

// faz o seguinte:

// 1. percentual / 100  
//    - Converte o valor do desconto de percentual para decimal.  
//    - Ex: 20% vira 0.20.

// 2. 1 - (percentual / 100)  
//    - Subtrai o desconto da totalidade (100%).  
//    - Ex: 1 - 0.20 = 0.80 → significa que vais pagar 80% do valor.

// 3. precoOriginal * (1 - (percentual / 100))  
//    - Aplica o desconto.  
//    - Ex: Se o preço original é 10.000 KZ com 20% de desconto:  
//      10000 * 0.80 = 8000 KZ.

// Ou seja, o código calcula quanto sobrou para pagar depois do desconto.