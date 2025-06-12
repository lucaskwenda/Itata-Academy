// ex028. Escreva um programa que imprime a sequência de Fibonacci até o N-ésimo termo.

function fibonacciAteN(n) { 
    let fib = [0, 1]; // Inicializa o array com os dois primeiros termos da sequência
    
    // Gera a sequência de Fibonacci até o N-ésimo termo
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Cada termo é a soma dos dois anteriores
    }
    
    return fib.slice(0, n); // Retorna os primeiros N termos
}

// Exemplo de uso
const N = 10; // Substitua pelo valor desejado
const resultado = fibonacciAteN(N);
console.log(`A sequência de Fibonacci até o ${N}-ésimo termo é: ${resultado.join(', ')}`); // exibe a sequência de Fibonacci até o N-ésimo termo 


// Explicação:  
// - A função `fibonacciAteN` recebe um número N como parâmetro.
// - Inicializa um array `fib` com os dois primeiros termos da sequência de Fibonacci (0 e 1).
// - Utiliza um loop `for` para calcular os termos subsequentes até o N-ésimo termo, onde cada termo é a soma dos dois anteriores.
// - Após o loop, retorna os primeiros N termos da sequência usando `slice`.
// - No exemplo, a função é chamada com N = 10, e o resultado é impresso no console.