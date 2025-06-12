function verificarPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Exemplo de uso:
const numero = 4; // Substitua pelo número que deseja verificar
if (verificarPrimo(numero)) {
  console.log(`${numero} é primo.`);
} else{
  console.log(`${numero} não é primo.`);
}


// Explicação:  
// - Números menores ou iguais a 1 não são primos.  
// - Verifica divisores de 2 até a raiz quadrada do número.  
// - Se encontrar um divisor, não é primo.