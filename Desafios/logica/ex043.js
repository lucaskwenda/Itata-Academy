// ex43.=> Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os
// nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1
// nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso
// contrário.

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
