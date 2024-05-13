function fatorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (let i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

function calcularPermutacaoSimples() {
    let num = parseInt(document.getElementById('inputNum').value);
    let resultado = fatorial(num);
    let formula = num + "! = " + resultado;

    document.getElementById('resultNum').innerHTML = "Resultado: " + resultado;
    document.getElementById('formulaNum').innerHTML = "Fórmula utilizada: " + formula;
}

function calcularAnagramas() {
    let palavra = document.getElementById('inputWord').value;
    let numLetras = palavra.length;
    let letrasRepetidas = {};
    for (let i = 0; i < numLetras; i++) {
        let letra = palavra[i];
        if (letra in letrasRepetidas) {
            letrasRepetidas[letra]++;
        } else {
            letrasRepetidas[letra] = 1;
        }
    }

    let resultado = fatorial(numLetras);
    for (let key in letrasRepetidas) {
        resultado /= fatorial(letrasRepetidas[key]);
    }

    let formula = numLetras + "! / ";
    for (let key in letrasRepetidas) {
        formula += letrasRepetidas[key] + "! * ";
    }
    formula = formula.slice(0, -3);

    document.getElementById('resultWord').innerHTML = "Resultado: " + resultado;
    document.getElementById('formulaWord').innerHTML = "Fórmula utilizada: " + formula;
}

document.getElementById('calc').addEventListener('click', calcularPermutacaoSimples);
document.getElementById('calcWord').addEventListener('click', calcularAnagramas);