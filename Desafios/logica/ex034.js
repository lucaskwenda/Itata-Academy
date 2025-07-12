// ex034 => 43. Faça um algoritmo para ler um número que é um código de usuário. Caso este 
// código seja diferente de um código armazenado internamente no algoritmo (igual a 
// 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja 
// correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a 
// certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha 
// esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’..

const codigoDigitado = 1234; // valor fixo
const senhaDigitada = 9999;  // valor fixo

const codigoCorreto = 1234;
const senhaCorreta = 9999;

if (codigoDigitado !== codigoCorreto) {
  console.log('Usuário inválido!');
} else if (senhaDigitada !== senhaCorreta) {
  console.log('Senha incorreta');
} else {
  console.log('Acesso permitido');
}
