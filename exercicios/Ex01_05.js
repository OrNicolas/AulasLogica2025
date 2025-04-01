const prompt = require('prompt-sync')();

const v = parseFloat(prompt('Insira um Valor em metros'))

cm = v * 100
mm = v * 1000
km = v / 1000

console.log(`cm :${cm}\n mm: ${mm} \n km:${km}`)