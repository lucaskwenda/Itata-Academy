// ex016 => Escreva um algoritmo para ler a quantidade de maçãs compradas, calcular e escrever o preço por maçã e o total a pagar. O preço por maçã é 100 kz se a quantidade for menor que 12, caso contrário, é 75 kz.
const quantidade = 15; // exemplo

let precoPorUnidade;

if (quantidade < 12) {
  precoPorUnidade = 100;
} else {
  precoPorUnidade = 75;
}

const total = quantidade * precoPorUnidade;

console.log(`Você comprou quantidade maçãs.`);
console.log(`Preço por maçã: ${precoPorUnidade} kz`);
console.log(`Total a pagar: ${total} kz`);


// Explicação:
// - Se comprar menos de 12 maçãs, o preço é 100 kz cada.
// - Se comprar 12 ou mais, o preço cai para 75 kz.
// - O total é calculado multiplicando a quantidade pelo preço unitário.