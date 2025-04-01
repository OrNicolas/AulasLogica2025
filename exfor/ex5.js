const prompt = require('prompt-sync')();
let idadeM = 0
let idadeF = 0
let M= 0
let F= 0
for (let i = 1; i <= 10; i++) {
    Idade = Number(prompt('Qual sua idade: '))
    Genero = prompt('Qual seu Gênero?M/F: ')

    if (Genero == 'M'){
        idadeM += Idade
        M++
    }
    if (Genero == 'F'){
        idadeF += Idade
        F++
    }

}
console.log(`
    A idade média de Homens é:${idadeM / M}
    A idade média de Mulheres é:${idadeF / F}
    E a média do grupo é: ${(idadeF + idadeM)/(M+F)}`)
