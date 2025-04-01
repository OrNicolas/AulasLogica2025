const prompt = require('prompt-sync')();
let par = 0
let somapar = 0
let impar = 0
let somaimpar = 0
for (let i = 1; i <= 5; i++) {
    nr = Number(prompt('Qual seu número'))
    if (nr % 2 == 0) {
        somapar += nr
        par++
    }
    if (nr % 2 == 1) {
        somaimpar += nr
        impar++
    }

}
console.log(`a quantidade de pares é: ${par}, e sua soma é:${somapar}`);
console.log(`a quantidade de impares é: ${impar}, e sua soma é:${somaimpar}`);
