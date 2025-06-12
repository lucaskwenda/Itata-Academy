//ex004 => Crie um programa que determina se um ano é bissexto.

// - Se o ano é divisível por 4, ele pode ser bissexto.
// - Mas se também for divisível por 100, ele só será bissexto se também for divisível por 400.

const ano = 1900 // mude conforme o seu ano

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  mostraAnoBissexto();
} 
else
  console.log(`O ano ${ano} não é bissexto`);


function mostraAnoBissexto(){
  console.log(`O ano ${ano} é bissexto`);
}
