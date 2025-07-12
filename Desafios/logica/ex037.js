// ex048. => Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.

const valores = [5, -3, 12, -8, 0, 7, -1, 4, -6, 9];

let negativos = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] < 0) {
    negativos++;
  }
}

console.log(`Quantidade de valores negativos: ${negativos}`);