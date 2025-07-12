// ex41.=> Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível
// (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser
// pago pelo cliente sabendo-se que o preço do litro da gasolina é 300 kz e o preço do
// litro do álcool é 250 kz..
// Dados de entrada
let litros = 20;
let tipo = 'A'; // 'A' para álcool, 'G' para gasolina

// Preços por litro
const precoGasolina = 300;
const precoAlcool = 250;

let desconto = 0;
let total = 0;

if (tipo === 'A') {
    if (litros <= 20) {
        desconto = 0.03; // 3%
    } else {
        desconto = 0.05; // 5%
    }
    total = litros * precoAlcool * (1 - desconto);
} else if (tipo === 'G') {
    if (litros <= 20) {
        desconto = 0.04; // 4%
    } else {
        desconto = 0.06; // 6%
    }
    total = litros * precoGasolina * (1 - desconto);
} else {
    console.log('Tipo de combustível inválido');
    return;
}

console.log(`Total a pagar: ${total.toFixed(2)} Kz`);