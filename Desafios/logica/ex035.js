// 47. Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 
// a 10 do valor lido. 



const numero = 7; // Muda esse valor para testar outro (entre 1 e 10)

if (numero >= 1 && numero <= 10) {
  console.log(`Tabuada do numero:`);
  for (let i = 1; i <= 10; i++) {
     console.log(`${numero} x ${i} = ${numero * i}`);
  } 
  }
 else {
  console.log('Valor inválido! Digite um número entre 1 e 10.');
}