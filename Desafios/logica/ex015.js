// ex015 => Escreva um algoritmo para ler o número da conta, o saldo, o valor do débito e o valor do crédito, calcular e escrever o saldo atual (saldo - débito + crédito). Se o saldo atual for positivo, escrever a mensagem "Saldo Positivo", senão escrever "Saldo Negativo".

// Entradas
const numeroConta = 12345;
const saldo = 15000;
const debito = 8000;
const credito = 3000;

// Cálculo do saldo atual
const saldoAtual = saldo - debito + credito;

// Saída
console.log(`Conta Nº: ${numeroConta}`);
console.log(`Saldo Atual: ${saldoAtual} kz`);

if (saldoAtual >= 0) {
  console.log("Saldo Positivo");
} else {
  console.log("Saldo Negativo");
}


// Explicação:
// - O saldo atual é calculado subtraindo o débito do saldo e somando o crédito.
// - Depois verifica se o saldo atual é positivo ou negativo e mostra a mensagem correspondente.