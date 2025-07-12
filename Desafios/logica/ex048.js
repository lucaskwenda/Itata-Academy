//  ex048 = Criar uma matriz 3x3 e preencher com valores digitados pelo usuário


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let matriz = [];
let linha = 0;

function preencherLinha() {
  if (linha < 3) {
    readline.question(`Digite 3 números para a linha ${linha + 1} separados por espaço: `, resposta => {
      const numeros = resposta.trim().split(' ').map(Number);
      if (numeros.length === 3 && numeros.every(n => !isNaN(n))) {
        matriz.push(numeros);
        linha++;
        preencherLinha();
      } else {
        console.log("Entrada inválida.");
        preencherLinha();
      }
    });
  } else {
    console.log("Matriz preenchida:");
    console.table(matriz);
    readline.close();
  }
}

preencherLinha();
