const prompt = require('prompt-sync')();

a = parseFloat(prompt('Valor Vendido:'))
if (a>5000) {console.log(`Sua comissão é: ${(a*5)/100}\n O valor total recebido é:${((a*5)/100)+a}`);
} else (console.log(`Sua comissão é: ${(a*3)/100} \n O valor total recebido é:${((a*3)/100)+a}`)
)