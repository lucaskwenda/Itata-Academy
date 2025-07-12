const readline = require('readline');

// Configuração da interface de entrada/saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para armazenar os alunos (máximo 30)
let alunos = [];
const MAX_ALUNOS = 30;

/**
 * Classe para representar um aluno
 */
class Aluno {
    constructor(nome, idade, genero, nota1, nota2) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero.toUpperCase();
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = this.calcularMedia();
        this.situacao = this.classificarSituacao();
    }

    /**
     * Calcula a média das duas notas
     */
    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }

    /**
     * Classifica a situação do aluno baseado na média
     */
    classificarSituacao() {
        if (this.media >= 10) return "Aprovado";
        if (this.media >= 8) return "Recuperação";
        return "Reprovado";
    }

    /**
     * Atualiza os dados do aluno
     */
    atualizarDados(nome, idade, genero, nota1, nota2) {
        this.nome = nome || this.nome;
        this.idade = idade || this.idade;
        this.genero = genero ? genero.toUpperCase() : this.genero;
        this.nota1 = nota1 !== undefined ? nota1 : this.nota1;
        this.nota2 = nota2 !== undefined ? nota2 : this.nota2;
        this.media = this.calcularMedia();
        this.situacao = this.classificarSituacao();
    }

    /**
     * Retorna informações formatadas do aluno
     */
    toString() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Gênero: ${this.genero} | ` +
               `Nota 1: ${this.nota1.toFixed(1)} | Nota 2: ${this.nota2.toFixed(1)} | ` +
               `Média: ${this.media.toFixed(1)} | Situação: ${this.situacao}`;
    }
}

/**
 * Função para fazer pergunta ao usuário
 */
function pergunta(questao) {
    return new Promise((resolve) => {
        rl.question(questao, resolve);
    });
}

/**
 * Valida se o nome contém apenas letras e espaços
 */
function validarNome(nome) {
    const regex = /^[a-zA-ZÀ-ÿ\s]+$/;
    return regex.test(nome) && nome.trim().length > 0;
}

/**
 * Valida se a idade é um número válido
 */
function validarIdade(idade) {
    const num = parseInt(idade);
    return !isNaN(num) && num > 0 && num <= 120;
}

/**
 * Valida se o gênero é M ou F
 */
function validarGenero(genero) {
    return genero.toUpperCase() === 'M' || genero.toUpperCase() === 'F';
}

/**
 * Valida se a nota está entre 0 e 20
 */
function validarNota(nota) {
    const num = parseFloat(nota);
    return !isNaN(num) && num >= 0 && num <= 20;
}

/**
 * Cadastra um novo aluno
 */
async function cadastrarAluno() {

    console.clear() //limpar a tela

    console.log('\n=== CADASTRO DE ALUNO ===');
    
    // Verifica se ainda há espaço para mais alunos
    if (alunos.length >= MAX_ALUNOS) {
        console.log('❌ Limite máximo de alunos atingido (30)!');
        return;
    }

    try {
        // Coleta e valida os dados do aluno
        let nome;
        do {
            nome = await pergunta('Nome do aluno: ');
            if (!validarNome(nome)) {
                console.log('❌ Nome inválido! Use apenas letras e espaços.');
            }
        } while (!validarNome(nome));

        let idade;
        do {
            idade = await pergunta('Idade: ');
            if (!validarIdade(idade)) {
                console.log('❌ Idade inválida! Digite um número entre 1 e 120.');
            }
        } while (!validarIdade(idade));

        let genero;
        do {
            genero = await pergunta('Gênero (M/F): ');
            if (!validarGenero(genero)) {
                console.log('❌ Gênero inválido! Digite M ou F.');
            }
        } while (!validarGenero(genero));

        let nota1;
        do {
            nota1 = await pergunta('Nota 1 (0-20): ');
            if (!validarNota(nota1)) {
                console.log('❌ Nota inválida! Digite um número entre 0 e 20.');
            }
        } while (!validarNota(nota1));

        let nota2;
        do {
            nota2 = await pergunta('Nota 2 (0-20): ');
            if (!validarNota(nota2)) {
                console.log('❌ Nota inválida! Digite um número entre 0 e 20.');
            }
        } while (!validarNota(nota2));

        // Cria o novo aluno
        const novoAluno = new Aluno(
            nome.trim(),
            parseInt(idade),
            genero,
            parseFloat(nota1),
            parseFloat(nota2)
        );

        alunos.push(novoAluno);
        console.log(`✅ Aluno ${nome} cadastrado com sucesso!`);

    } catch (error) {
        console.log('❌ Erro ao cadastrar aluno:', error.message);
    }
}

/**
 * Lista todos os alunos cadastrados
 */
function listarAlunos() {
    console.clear() //limpar a tela
    console.log('\n=== LISTA DE ALUNOS ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.toString()}`);
    });
}

/**
 * Gera relatório completo da turma
 */
function gerarRelatorio() {
    console.clear() //limpar a tela
    console.log('\n=== RELATÓRIO DA TURMA ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    // Lista todos os alunos
    console.log('\n📊 LISTA DE ALUNOS:');
    alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.toString()}`);
    });

    // Calcula estatísticas
    const medias = alunos.map(aluno => aluno.media);
    const mediaGeral = medias.reduce((soma, media) => soma + media, 0) / alunos.length;
    const maiorMedia = Math.max(...medias);
    const menorMedia = Math.min(...medias);

    // Conta por situação
    const aprovados = alunos.filter(aluno => aluno.situacao === 'Aprovado').length;
    const recuperacao = alunos.filter(aluno => aluno.situacao === 'Recuperação').length;
    const reprovados = alunos.filter(aluno => aluno.situacao === 'Reprovado').length;

    // Conta alunos maiores de 18 anos
    const maioresDeIdade = alunos.filter(aluno => aluno.idade > 18).length;

    // Exibe estatísticas
    console.log('\n📈 ESTATÍSTICAS:');
    console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);
    console.log(`Maior média: ${maiorMedia.toFixed(1)}`);
    console.log(`Menor média: ${menorMedia.toFixed(1)}`);
    console.log(`Total de alunos: ${alunos.length}`);
    console.log(`Aprovados: ${aprovados}`);
    console.log(`Em recuperação: ${recuperacao}`);
    console.log(`Reprovados: ${reprovados}`);
    console.log(`Maiores de 18 anos: ${maioresDeIdade}`);
}

/**
 * Busca um aluno pelo nome
 */
async function buscarAluno() {
    console.clear() //limpar a tela
    console.log('\n=== BUSCAR ALUNO ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    const nomeBusca = await pergunta('Digite o nome do aluno para buscar: ');
    
    // Busca case-insensitive
    const alunoEncontrado = alunos.find(aluno => 
        aluno.nome.toLowerCase().includes(nomeBusca.toLowerCase().trim())
    );

    if (alunoEncontrado) {
        console.log('\n✅ Aluno encontrado:');
        console.log(alunoEncontrado.toString());
    } else {
        console.log('❌ Aluno não encontrado.');
    }
}

/**
 * Atualiza dados de um aluno existente
 */
async function atualizarAluno() {
    console.clear() //limpar a tela
    console.log('\n=== ATUALIZAR ALUNO ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    // Lista alunos para seleção
    console.log('\nAlunos cadastrados:');
    alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.nome}`);
    });

    const indiceStr = await pergunta('Digite o número do aluno para atualizar: ');
    const indice = parseInt(indiceStr) - 1;

    if (indice < 0 || indice >= alunos.length) {
        console.log('❌ Número inválido!');
        return;
    }

    const aluno = alunos[indice];
    console.log(`\nDados atuais de ${aluno.nome}:`);
    console.log(aluno.toString());

    console.log('\nDigite os novos dados (pressione Enter para manter o valor atual):');

    // Coleta novos dados
    const novoNome = await pergunta(`Nome (${aluno.nome}): `);
    const novaIdade = await pergunta(`Idade (${aluno.idade}): `);
    const novoGenero = await pergunta(`Gênero (${aluno.genero}): `);
    const novaNota1 = await pergunta(`Nota 1 (${aluno.nota1}): `);
    const novaNota2 = await pergunta(`Nota 2 (${aluno.nota2}): `);

    // Valida e atualiza apenas os campos alterados
    try {
        const dadosAtualizados = {};
        
        if (novoNome.trim() && validarNome(novoNome)) {
            dadosAtualizados.nome = novoNome.trim();
        }
        
        if (novaIdade.trim() && validarIdade(novaIdade)) {
            dadosAtualizados.idade = parseInt(novaIdade);
        }
        
        if (novoGenero.trim() && validarGenero(novoGenero)) {
            dadosAtualizados.genero = novoGenero;
        }
        
        if (novaNota1.trim() && validarNota(novaNota1)) {
            dadosAtualizados.nota1 = parseFloat(novaNota1);
        }
        
        if (novaNota2.trim() && validarNota(novaNota2)) {
            dadosAtualizados.nota2 = parseFloat(novaNota2);
        }

        aluno.atualizarDados(
            dadosAtualizados.nome,
            dadosAtualizados.idade,
            dadosAtualizados.genero,
            dadosAtualizados.nota1,
            dadosAtualizados.nota2
        );

        console.log('✅ Dados atualizados com sucesso!');
        console.log(aluno.toString());

    } catch (error) {
        console.log('❌ Erro ao atualizar dados:', error.message);
    }
}

/**
 * Remove um aluno do sistema
 */
async function removerAluno() {
    console.clear() //limpar a tela
    console.log('\n=== REMOVER ALUNO ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    // Lista alunos para seleção
    console.log('\nAlunos cadastrados:');
    alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.nome}`);
    });

    const indiceStr = await pergunta('Digite o número do aluno para remover: ');
    const indice = parseInt(indiceStr) - 1;

    if (indice < 0 || indice >= alunos.length) {
        console.log('❌ Número inválido!');
        return;
    }

    const aluno = alunos[indice];
    const confirmacao = await pergunta(`Tem certeza que deseja remover ${aluno.nome}? (s/n): `);

    if (confirmacao.toLowerCase() === 's') {
        alunos.splice(indice, 1);
        console.log(`✅ Aluno ${aluno.nome} removido com sucesso!`);
    } else {
        console.log('❌ Operação cancelada.');
    }
}

/**
 * Ordena alunos por nome ou média
 */
async function ordenarAlunos() {
    console.clear() //limpar a tela
    console.log('\n=== ORDENAR ALUNOS ===');
    
    if (alunos.length === 0) {
        console.log('❌ Nenhum aluno cadastrado.');
        return;
    }

    console.log('Opções de ordenação:');
    console.log('1. Por nome (A-Z)');
    console.log('2. Por média (maior para menor)');
    console.log('3. Por média (menor para maior)');

    const opcao = await pergunta('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            alunos.sort((a, b) => a.nome.localeCompare(b.nome));
            console.log('✅ Alunos ordenados por nome!');
            break;
        case '2':
            alunos.sort((a, b) => b.media - a.media);
            console.log('✅ Alunos ordenados por média (maior para menor)!');
            break;
        case '3':
            alunos.sort((a, b) => a.media - b.media);
            console.log('✅ Alunos ordenados por média (menor para maior)!');
            break;
        default:
            console.log('❌ Opção inválida!');
            return;
    }

    // Mostra lista ordenada
    console.log('\nLista ordenada:');
    alunos.forEach((aluno, index) => {
        console.log(`${index + 1}. ${aluno.toString()}`);
    });
}

/**
 * Exibe o menu principal
 */
function exibirMenu() {
    console.clear() //limpar a tela
    console.log('\n=== SISTEMA DE CADASTRO DE ALUNOS ===');
    console.log('1. Cadastrar aluno');
    console.log('2. Listar alunos');
    console.log('3. Gerar relatório completo');
    console.log('4. Buscar aluno');
    console.log('5. Atualizar aluno');
    console.log('6. Remover aluno');
    console.log('7. Ordenar alunos');
    console.log('8. Sair');
    console.log(`\nAlunos cadastrados: ${alunos.length}/${MAX_ALUNOS}`);
}

/**
 * Função principal do sistema
 */
async function main() {
    console.log('🎓 Bem-vindo ao Sistema de Cadastro de Alunos!');
    
    while (true) {
        exibirMenu();
        const opcao = await pergunta('\nEscolha uma opção: ');

        switch (opcao) {
            case '1':
                await cadastrarAluno();
                break;
            case '2':
                listarAlunos();
                break;
            case '3':
                gerarRelatorio();
                break;
            case '4':
                await buscarAluno();
                break;
            case '5':
                await atualizarAluno();
                break;
            case '6':
                await removerAluno();
                break;
            case '7':
                await ordenarAlunos();
                break;
            case '8':
                console.log('👋 Obrigado por usar o sistema!');
                rl.close();
                return;
            default:
                console.log('❌ Opção inválida! Tente novamente.');
        }

        // Pausa antes de mostrar o menu novamente
        await pergunta('\nPressione Enter para continuar...');
    }
}

// Inicia o sistema
main().catch(error => {
    console.error('❌ Erro no sistema:', error);
    rl.close();
});