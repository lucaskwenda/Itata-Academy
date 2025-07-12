// ex040.=> Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere
// que as idades dos homens serão sempre diferentes entre si, bem como as das
// mulheres). Calcule e escreva a soma das idades do homem mais velho com a
// mulher mais nova, e o produto das idades do homem mais novo com a mulher mais
// velha.

// Idades dos homens e mulheres (exemplo)
let homem1 = 40;
let homem2 = 25;
let mulher1 = 30;
let mulher2 = 20;

// Identificar homem mais velho e mais novo
let homemMaisVelho = homem1 > homem2 ? homem1 : homem2;
let homemMaisNovo = homem1 < homem2 ? homem1 : homem2;

// Identificar mulher mais velha e mais nova
let mulherMaisVelha = mulher1 > mulher2 ? mulher1 : mulher2;
let mulherMaisNova = mulher1 < mulher2 ? mulher1 : mulher2;

// Cálculos
let soma = homemMaisVelho + mulherMaisNova;
let produto = homemMaisNovo * mulherMaisVelha;

console.log(`Soma do homem mais velho com a mulher mais nova: ${soma}`);
console.log(`Produto do homem mais novo com a mulher mais velha:${produto}`)