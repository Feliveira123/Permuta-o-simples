// Função para calcular a permutação de um número
function calcularPermutacao(n) {
    if (n < 0) {
        return 'Erro: Não é possível calcular permutações de números negativos.';
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Adiciona um ouvinte de evento para o formulário para interceptar o envio
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const numero = parseInt(document.getElementById('inputNum').value);
        if (isNaN(numero)) {
            document.getElementById('result').innerText = 'Por favor, insira um número válido.';
            return;
        }

        const permutacao = calcularPermutacao(numero);
        document.getElementById('result').innerText = `A permutação de ${numero} é: ${permutacao}`;
    });
});
