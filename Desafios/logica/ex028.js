// ex029 => Faça um programa que verifica se um número é palíndromo. 

function verificarPalindromo(numero) {
  const strNumero = numero.toString(); // Converte o número para string
  const strReversa = strNumero.split('').reverse().join(''); // Inverte a string

  return strNumero === strReversa; // Compara a string original com a invertida
}
// Exemplo de uso
const numero = 121; // Substitua pelo número que deseja verificar
if (verificarPalindromo(numero)) {
  console.log(`${numero} é um palíndromo.`);
}
else {
  console.log(`${numero} não é um palíndromo.`);
}

// Explicação:
// - A função `verificarPalindromo` recebe um número como parâmetro.
// - Converte o número para uma string usando `toString()`.
// - Inverte a string usando `split('')` para dividir em caracteres, `reverse()` para inverter a ordem e `join('')` para juntar novamente em uma string.    
// - Compara a string original com a string invertida.
// - Se forem iguais, o número é um palíndromo; caso contrário, não é.
// - No exemplo, a função é chamada com o número 121, e o resultado é impresso no console.
// - O número 121 é um palíndromo, pois lido de trás para frente é o mesmo que lido de frente para trás.