function ehPalindromo(num) {
  const str = num.toString();
  const reverso = str.split('').reverse().join('');
  return str === reverso;
}

const numeros = [121, 123, 44, 45654, 789, 11];

for(let i = 0; i < numeros.length; i++) {
  if (ehPalindromo(numeros[i])) {
    console.log(`${numeros[i]} é palíndromo`);
  } else {
    console.log(`${numeros[i]} não é palíndromo`);
  }
}

// numeros.forEach(num => {
//   if (ehPalindromo(num)) 
//     console.log(`${num} é palíndromo`);

//    else 
//     console.log(`${num} não é palíndromo`);
  
// });