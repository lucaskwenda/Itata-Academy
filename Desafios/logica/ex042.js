// ex042.=> Implemente um programa que multiplique duas matrizes.


// Matrizes de exemplo (2x3) e (3x2)
const A = [
  [1, 2, 3],
  [4, 5, 6]
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12]
];

// Função para multiplicar matrizes
function multiplicarMatrizes(A, B) {
  const linhasA = A.length;
  const colunasA = A[0].length;
  const colunasB = B[0].length;

  const resultado = new Array(linhasA).fill(0).map(() => new Array(colunasB).fill(0));

  for (let i = 0; i < linhasA; i++) {
    for (let j = 0; j < colunasB; j++) {
      for (let k = 0; k < colunasA; k++) {
        resultado[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return resultado;
}

// Execução
const resultado = multiplicarMatrizes(A, B);
console.log("Resultado da multiplicação:");
console.table(resultado);