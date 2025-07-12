// 44. Ler um vetor A de 10 números. Após, ler mais um número e guardar em uma 
// variável X. Armazenar em um vetor M o resultado de cada elemento de A 
// multiplicado pelo valor X. Logo após, imprimir o vetor M. e js no terminal

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let A = [];
let X = 0;
let count = 0;

console.log("Digite 10 números para o vetor A:");

function lerNumeros() {
  rl.question(`A[${count}] = `, (input) => {
    const numero = Number(input);

    if (isNaN(numero)) {
      console.log("Por favor, insira um número válido.");
      return lerNumeros();
    }

    A.push(numero);
    count++;

    if (count < 10) {
      lerNumeros();
    } else {
      rl.question("Digite o valor de X: ", (inputX) => {
        X = Number(inputX);

        if (isNaN(X)) {
          console.log("Por favor, insira um número válido para X.");
          rl.close();
          return;
        }

        const M = A.map(num => num * X);
        console.log("\nVetor M (A[i] * X):");
        console.log(M);

        rl.close();
      });
    }
  });
}

lerNumeros();
