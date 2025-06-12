// ex018 => Escreva um algoritmo para ler a hora de início e a hora de fim de um jogo, calcular e escrever a duração do jogo em horas. O jogo pode começar em um dia e terminar no dia seguinte. Considere que o jogo dura no máximo 24 horas.4

// Lógica:
// - Se a hora de fim for maior que a de início → duração = fim - início
// - Se for menor ou igual → duração = (24 - início) + fim

const inicio = 22; // Exemplo: jogo começou às 22h
const fim = 2;     // Exemplo: terminou às 2h

let duracao;

if (fim > inicio) {
  duracao = fim - inicio;
} else {
  duracao = (24 - inicio) + fim;
}

console.log(`O jogo durou ${duracao} hora(s).`);
