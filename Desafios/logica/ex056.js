const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomes = [];
let contador = 0;

console.log("Digite os nomes de 10 pessoas:");

function lerNomes() {
  if (contador < 10) {
    rl.question(`Nome ${contador + 1}: `, (nome) => {
      nomes.push(nome.trim());
      contador++;
      lerNomes();
    });
  } else {
    rl.question("\nDigite um nome para procurar: ", (nomeProcurado) => {
      const achou = nomes.includes(nomeProcurado.trim());

      if (achou) {
        console.log("ACHEI");
      } else {
        console.log("NÃO ACHEI");
      }

      rl.close();
    });
  }
}

lerNomes();
