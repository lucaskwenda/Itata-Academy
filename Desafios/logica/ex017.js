// ex017 => Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem 
// que diga se ela poderá ou não votar este ano (não é necessário considerar o mês 
// em que a pessoa nasceu). 

// Entrada de dados
const anoAtual = 2025; // Exemplo de ano atual
const anoNascimento = 2005; // Exemplo de ano de nascimento
// Cálculo da idade

const idade = anoAtual - anoNascimento;
// Verificação se pode votar 
if (idade >= 18) {
  console.log("Você pode votar este ano.");
}else {
  console.log("Você não pode votar este ano.");
}
// explicação:
// - A idade é calculada subtraindo o ano de nascimento do ano atual.
// - Se a idade for 18 ou mais, a pessoa pode votar.
// - Se for menor que 18, a pessoa não pode votar.