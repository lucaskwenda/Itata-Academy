// ex009 =>  Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

// Para calcular a idade total em dias:

// - Multiplicamos os anos por 365  
// - Multiplicamos os meses por 30  
// - Somamos os dias restantes  

// Fórmula geral:

// diasTotais = (anos * 365) + (meses * 30) + dias;


function idadeEmDias(anos, meses, dias) {
  const total = (anos * 365) + (meses * 30) + dias;
  return total;
}

// Exemplo:
const anos = 20;
const meses = 6;
const dias = 11;

console.log(`Idade total em dias: ${idadeEmDias(anos, meses, dias)} dias`);


// Explicação:  
// Se alguém tem 20 anos, 5 meses e 10 dias:  
// - 20 * 365 = 7300  
// - 5 * 30 = 150  
// - Total = 7300 + 150 + 10 = 7460 dias.