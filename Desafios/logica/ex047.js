// ex047. Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva 
// um algoritmo que permita a entrada das seguintes informações: a) o número total de 
// mercadorias no estoque; b) o valor de cada mercadoria. Ao final imprimir o valor total 
// em estoque e a média de valor das mercadorias.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numMercadorias = 0;
let mercadoriaAtual = 0;
let valores = [];
let totalEstoque = 0;

function iniciar() {
  rl.question("Digite o número total de mercadorias no estoque: ", (input) => {
    numMercadorias = Number(input);

    if (isNaN(numMercadorias) || numMercadorias <= 0) {
      console.log("Por favor, digite um número válido maior que 0.");
      iniciar();
    } else {
      lerValores();
    }
  });
}

function lerValores() {
  if (mercadoriaAtual < numMercadorias) {
    rl.question(`Valor da mercadoria ${mercadoriaAtual + 1}: `, (input) => {
      const valor = Number(input);

      if (isNaN(valor) || valor < 0) {
        console.log("Por favor, digite um valor numérico positivo.");
        return lerValores();
      }

      valores.push(valor);
      totalEstoque += valor;
      mercadoriaAtual++;
      lerValores();
    });
  } else {
    const media = totalEstoque / numMercadorias;
    console.log(`\nValor total em estoque: ${totalEstoque.toFixed(2)} Kz`);
    console.log(`Valor médio das mercadorias: ${media.toFixed(2)} Kz`);
    rl.close();
  }
}

iniciar();
