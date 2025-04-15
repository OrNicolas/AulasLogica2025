const prompt = require('prompt-sync')();

function Operacao(a,b,i) {

    a = Number(prompt('Primeiro Numero'))
    b = Number(prompt('Segundo Numero'))
    i= prompt('Qual Operação?')
    if (i == '+') {
        console.log(a + b);
    }
    else if (i == '-') {
        console.log(a - b);
    }
    else if (i == '*') {
        console.log(a * b);
    }
    else if (i == '/') {
        console.log(a / b);
    }
    else {
        console
    }
}

Operacao ()