// ex013 => Escreva um algoritmo para ler a quantidade atual em estoque, a quantidade máxima e a quantidade mínima em estoque de um produto, calcular e escrever a quantidade média ((quantidade máxima + quantidade mínima) / 2). Se a quantidade atual for maior ou igual à média, escrever a mensagem "Não efetuar compra", senão escrever "Efetuar compra".

const qtdAtual = 50;   // quantidade atual em estoque
const qtdMax = 100;    // quantidade máxima
const qtdMin = 20;     // quantidade mínima

// Cálculo da quantidade média
const qtdMedia = (qtdMax + qtdMin) / 2;

// Verificação
if (qtdAtual >= qtdMedia) {
  console.log("Não efetuar compra");
} else {
  console.log("Efetuar compra");
}


// Explicação:
// - A quantidade média é a média entre o máximo e o mínimo do estoque.
// - Se a quantidade atual for maior ou igual à média → não precisa comprar.
// - Se for menor → deve-se efetuar compra.