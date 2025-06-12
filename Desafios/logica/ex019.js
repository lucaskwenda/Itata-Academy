// ex019 => A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 

const horasTrabalhadas = 180; // Exemplo: 180 horas trabalhadas no mês
const salarioPorHora = 500; // Exemplo: salário de 500 Kz por hora
const horasNormais = 40 * 4; // 40 horas semanais * 4 semanas
let salarioTotal;

if (horasTrabalhadas > horasNormais) {
  const horasExtras = horasTrabalhadas - horasNormais;
  const valorHoraExtra = salarioPorHora * 1.5; // 50% a mais
  salarioTotal = (horasNormais * salarioPorHora) + (horasExtras * valorHoraExtra);
}
else {
  salarioTotal = horasTrabalhadas * salarioPorHora; // Sem horas extras
}
console.log(`O salário total do funcionário é: ${salarioTotal} Kz`);

// Explicação:
// - Se o funcionário trabalhou mais de 160 horas (40 horas/semana * 4 semanas), calcula-se as horas extras.
// - O valor da hora extra é 50% a mais que o salário regular.
// - O salário total é a soma do salário pelas horas normais e o valor das horas extras.
// - Se não houver horas extras, o salário total é simplesmente o número de horas trabalhadas multiplicado pelo salário por hora.
// - O resultado é exibido em Kz.