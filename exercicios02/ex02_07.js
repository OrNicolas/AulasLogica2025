const prompt = require('prompt-sync')();

a = parseFloat(prompt('Velocidade do Carro:'))

if (a<=80) {console.log('Não foi multado')
} else (console.log(`Foi multado \n Valor da multa é: ${(a-80)*7.00} `)
)