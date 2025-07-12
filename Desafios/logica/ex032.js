// ex032.=> Implemente um programa que multiplique duas matrizes. 
const A = [
  [1, 2],
  [3, 4]
];

const B = [
  [5, 6],
  [7, 8]
];

const linhasA = A.length;
const colunasA = A[0].length;
const colunasB = B[0].length;

// Criar matriz resultado com zeros
const resultado = Array.from({ length: linhasA }, () =>
  Array(colunasB).fill(0)
);

// Multiplicação
for (let i = 0; i < linhasA; i++) {
  for (let j = 0; j < colunasB; j++) {
    for (let k = 0; k < colunasA; k++) {
      resultado[i][j] += A[i][k] * B[k][j];
    }
  }
}

console.log("Matriz resultado:");
console.log(resultado);


// Requisitos:  
// - O número de colunas da matriz A deve ser igual ao número de linhas da matriz B.  
// - O resultado será uma nova matriz com linhasA x colunasB.
//me perdi e deixo  para quem quiser resolver
//este ex  