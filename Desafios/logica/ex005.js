// ex005 => Faça um programa que classifica um triângulo como equilátero, isósceles ou 
// escaleno. 

// A classificação de um triângulo com base nos lados é feita assim:

// - Equilátero: todos os três lados são iguais.  
//   Fórmula:  
//   Se a = b = c, então é equilátero.

// - Isósceles: dois lados são iguais e um é diferente.  
//   Fórmula:  
//   Se a = b ≠ c ou a = c ≠ b ou b = c ≠ a, então é isósceles.

// - Escaleno: todos os três lados são diferentes.  
//   Fórmula:  
//   Se a ≠ b ≠ c, então é escaleno.
function classificarTriangulo(lado1, lado2, lado3) {
  if (lado1 === lado2 && lado2 === lado3) {
    return "Equilátero"; // Todos os lados iguais
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    return "Isósceles"; // Dois lados iguais
  } else {
    return "Escaleno"; // Todos os lados diferentes
  }
}

// Exemplo:
console.log(classificarTriangulo(1, 1, 1)); // Equilátero
console.log(classificarTriangulo(5, 3, 3)); // Isósceles
console.log(classificarTriangulo(7, 4, 3)); // Escaleno