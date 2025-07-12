
// 46. O mesmo exercício anterior, mas agora deve escrever o menor elemento do vetor e 
// a respectiva posição dele nesse vetor. 


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let Q = [];
let index = 0;

console.log("Digite 20 números POSITIVOS para o vetor Q:");

function lerNumeros() {
  rl.question(`Q[${index}] = `, (input) => {
    const numero = Number(input);

    if (isNaN(numero) || numero < 0) {
      console.log("Apenas números POSITIVOS são permitidos.");
      return lerNumeros();
    }

    Q.push(numero);
    index++;

    if (index < 20) {
      lerNumeros();
    } else {
      let menor = Q[0];
      let posicao = 0;

      for (let i = 1; i < Q.length; i++) {
        if (Q[i] < menor) {
          menor = Q[i];
          posicao = i;
        }
      }

      console.log(`\nO menor valor é ${menor} e está na posição ${posicao} (índice do vetor).`);
      rl.close();
    }
  });
}

lerNumeros();
