const prompt = require('prompt-sync')()


console.log('================================');
console.log('🤔   JOGO DA ADIVINHAÇÃO  🤔   ');
console.log('================================');

let nrSecreto = Math.floor(Math.random() * 100) + 1
let acertou = false
let tentativas = 0
while (acertou == false) {
    let chute = Number(prompt('Digite um Número entre 1 e 100: '))
    if (chute == nrSecreto) {
        tentativas ++
    console.log(`Parabens, você acertou em ${tentativas} tentativas!! 👏👏`)
        acertou=true
      
        
    }
    else if (nrSecreto > chute) {
        console.log('O número é maior');
        tentativas ++
    }
    else if (nrSecreto < chute) {
        console.log('O Número é menor');
        tentativas ++
    }


}
console.log('FIM');
