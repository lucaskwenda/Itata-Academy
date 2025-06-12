//ex026 => Implemente um programa que encontre o fatorial de um número.

function calcularFatorial(numero) {
  if (numero < 0) {
    return "Fatorial não definido para números negativos.";
  }
  
  let fatorial = 1; // Inicializa o fatorial como 1
  
  // Loop para calcular o fatorial
  for (let i = 2; i <= numero; i++) {
    fatorial *= i; // Multiplica o valor atual de fatorial pelo número i
  }
  
  return fatorial; // Retorna o resultado do fatorial
}

// Exemplo de uso
const numero = 5; // Substitua pelo número desejado
const resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);


// Explicação:
// - A função `calcularFatorial` recebe um número como parâmetro.
// - Verifica se o número é negativo, retornando uma mensagem apropriada se for o caso.
// - Inicializa uma variável `fatorial` com 1.
// - Utiliza um loop `for` para multiplicar `fatorial` pelo número atual `i`, começando de 2 até o número fornecido.
// - Após o loop, retorna o valor total do fatorial.
// - No exemplo, a função é chamada com o número 5, e o resultado é impresso no console.
// - O fatorial de 5 é 120, pois 5! = 5 * 4 * 3 * 2 * 1.