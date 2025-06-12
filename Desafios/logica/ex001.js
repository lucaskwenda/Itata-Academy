// ex001 => Escreva um programa que verifica se um número é positivo, negativo ou nulo.

const umNumero = null // aqui você pode modar o valor para tertar se é positivo, negativo ou nulo

if(umNumero === null)
     console.log(`o número ${umNumero} é nulo`)

if(umNumero === 0)
    console.log(`o número ${umNumero} é considerado neutro — não é positivo nem negativo nem nulo.`)

else if(umNumero < 0)
    console.log(`o número ${umNumero} é negativo`) 
else if(umNumero > 0)
    console.log(`o número ${umNumero} é positivo`) 