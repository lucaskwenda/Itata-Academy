//ex054 = Verificar se todos os elementos de uma matriz são positivos


let matriz = [
  [1, 2],
  [3, -4]
];

let todosPositivos = matriz.every(linha => linha.every(valor => valor >= 0));

console.log("Todos os valores são positivos?", todosPositivos);
