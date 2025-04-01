const prompt = require('prompt-sync')();
inicio = Number(prompt('Qual o inicio?'))
fim = Number(prompt('Qual o fim?'))
passo = Number(prompt('Qual o passo?'))
for (let i = inicio; i <= fim; i+=passo) {
    console.log(i);
    
}