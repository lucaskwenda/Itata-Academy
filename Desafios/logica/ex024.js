//  ex024=> Crie um programa que imprime os primeiros N números pares. 

for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}
//
// Explicação:
// - O loop `for` itera de 0 a 9.
// - A condição `i % 2 === 0` verifica se o número é par.  
// - Se for par, imprime que o número é par; caso contrário, imprime que é ímpar.
// - O resultado é uma lista de números de 0 a 9, indicando quais são pares e quais são ímpares.