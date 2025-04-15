const prompt = require('prompt-sync')();


function Divisao (a,b) {
    let c=a/b
    console.log(`O resultado É: ${c}`);
    
}

Divisao (a=Number(prompt('Qual o primeiro divisor?:')) , b=Number(prompt('Qual o segundo divisor?:')))


