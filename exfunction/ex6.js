const prompt = require('prompt-sync')();

function Operacao(a,b,i) {

    a = Number(prompt('Primeiro Numero'))
    b = Number(prompt('Segundo Numero'))
    i= prompt('Qual Operação? (*, +, -, /) :')
//     if (i == '+') {
//         console.log(a + b);
//     }
//     else if (i == '-') {
//         console.log(a - b);
//     }
//     else if (i == '*') {
//         console.log(a * b);
//     }
//     else if (i == '/') {
//         console.log(a / b);
//     }
//     else {
//         console.log ('Não foi possível')
//     }

switch (i) {
    case '*': console.log(a * b);
        
        break;
        case '+': console.log(a + b);
        
        break;
        case '-': console.log(a - b);
        
        break;
        case '/': console.log(a / b);
        
        break;

    
}






}

Operacao ()