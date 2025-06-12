// ex008 => Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e 
// escrever o valor correspondente em graus Celsius 

// A fórmula para converter de Fahrenheit (°F) para Celsius (°C) é:

// C = (F - 32) × 5/9

// Exemplo:
// Se F = 77°F, então:

// C = (77 - 32) × 5/9 = 45 × 5/9 = 25°C

// Essa fórmula subtrai 32 (ajuste do ponto de congelamento) e depois ajusta a escala multiplicando por 5/9.

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius.toFixed(2); // arredonda para 2 casas decimais
}

// Exemplo:
const tempF = 212;
console.log(`tempF ${tempF}°F em Celsius = ${fahrenheitToCelsius(tempF)}°C`); 