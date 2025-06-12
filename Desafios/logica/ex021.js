// ex021=>  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até  500 000 kz mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total. 

// Lógica:
// - Se as vendas forem até 500.000 kz → comissão = 3% sobre tudo.
// - Se ultrapassar → 3% sobre 500.000 kz + 5% sobre o que passar de 500.000 kz.
// - Salário total = salário fixo + comissão.


const salarioFixo = 100000; // Exemplo
const vendas = 750000;      // Exemplo

let comissao;

if (vendas <= 500000) {
  comissao = vendas * 0.03;
} else {
  comissao = (500000 * 0.03) + ((vendas - 500000) * 0.05);
}

const salarioTotal = salarioFixo + comissao;

console.log(`O salário total é ${salarioTotal} Kz.`);