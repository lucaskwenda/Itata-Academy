// ex049. => Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] 
// (inlcuindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo. 



const valores = [5, 12, 25, 10, 20, 7, 19, 22, 15, 8];

let dentro = 0;
let fora = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] >= 10 && valores[i] <= 20) {
    dentro++;
  } else {
    fora++;
  }
}

console.log(`Dentro do intervalo [10,20]: dentro`);
console.log(`Fora do intervalo: ${fora}`);