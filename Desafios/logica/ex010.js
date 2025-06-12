// ex10 => Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

// Para calcular o percentual de votos brancos, nulos e válidos:

// - Fórmula:  
//   percentual = (tipoDeVoto / totalEleitores) * 100


function calcularPercentuais(total, brancos, nulos, validos) {
  const percBrancos = (brancos / total) * 100;
  const percNulos = (nulos / total) * 100;
  const percValidos = (validos / total) * 100;

  console.log(`Brancos: ${percBrancos.toFixed(2)}`)
  console.log(`Nulos: ${percNulos.toFixed(2)}%`);
  console.log(`Válidos: ${percValidos.toFixed(2)}%`);
}

// Exemplo:
const totalEleitores = 1000;
const votosBrancos = 100;
const votosNulos = 150;
const votosValidos = 750;

calcularPercentuais(totalEleitores, votosBrancos, votosNulos, votosValidos);


// Resultado esperado:
// - Brancos: 10%
// - Nulos: 15%
// - Válidos: 75%

// Nota: a soma de votos (brancos + nulos + válidos) deve ser igual ao total de eleitores.