const prompt = require('prompt-sync')();

v1 = parseFloat( prompt( 'Insira o valor da largura:'))
v2 = parseFloat( prompt( 'Insira o valor do comprimento:'))

console.log (` Area: ${v1*v2}
    Tinta: ${(v1*v2)/2}`)