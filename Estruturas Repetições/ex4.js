const prompt = require('prompt-sync')();



let MaiorValor = 0
let MenorValor = 10000000000000000
a = 1
b = 0

while (a <= 10) {

    let valor = Number(prompt('Digite um valor:'))

    if (valor > MaiorValor) {
        MaiorValor = valor}
    if (valor < MenorValor) {
        MenorValor = valor}
        b = b + valor
        a++
    }
    b = b / 10

    console.log (`Maior Valor:${MaiorValor}
    Menor Valor:${MenorValor}
    E a Média é:${b}`)