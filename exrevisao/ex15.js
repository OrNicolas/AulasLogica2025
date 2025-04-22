const prompt = require('prompt-sync')();

const a = parseFloat(prompt('Qual o valor dívida?'))
parcelas = Number(prompt('Quantidade de Parcelas?'))

if (parcelas == 1) {
    console.log(`Juros: 0%
Valor da parcela: ${a}
Valor com Juros ${a}`)
}
if (parcelas == 3) {
    console.log(`Juros: 10%
Valor da parcela: ${(a * 0.10 + a) / 3}
Valor com Juros ${a * 0.10 + a}`)
}
if (parcelas == 6) {
    console.log(`Juros: 15%
Valor da parcela: ${(a * 0.15 + a) / 6}
Valor com Juros ${a * 0.15 + a}`)
}
if (parcelas == 9) {
    console.log(`Juros: 20%
Valor da parcela: ${(a * 0.20 + a) / 9}
Valor com Juros ${a * 0.20 + a}`)
}
if (parcelas == 12) {
    console.log(`Juros: 25%
Valor da parcela: ${(a * 0.25 + a) / 12}
Valor com Juros ${a * 0.25 + a}`)
}





