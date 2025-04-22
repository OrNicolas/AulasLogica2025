const prompt = require('prompt-sync')();

function a(a) {
    if (a < 0) {
        console.log('Negativo')
    } else {
        console.log('Positivo')
    }
}

a(a = Number(prompt('Qual o número?:')))