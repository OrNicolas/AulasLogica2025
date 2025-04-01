const prompt = require('prompt-sync')();

/* estrutura repetição - while do */

let Resposta = 'S'


/*while (Resposta = 'S') {
    console.log('Voce esta no bloco');
    Resposta = prompt ('Qual sua Resposta? S/N')
    
}
console.log('FIM');


let SenhaSecreta = 'Senai'
let SenhaDigitada

while ( SenhaSecreta != SenhaDigitada) {

console.log('Descubra a Senha');
SenhaDigitada = prompt ('Qual é a Senha?')

}
*/
Numero1 = parseFloat(prompt('Qual numero deseja multiplicar:'))
let ind = 1
while (ind <=20 ) {
console.log (Numero1 + ' ' +'Vezes' + ' ' + ind +' ' + 
    ':'+ Numero1*ind)
ind++
}





let total = 0
let qtde= 0


while (true) {
    let valor = Number(prompt ('Digite o valor produto ( 0 para Encerrar):'))
    if (valor==0){
        break
    }else { total = valor+total
       qtde++
    }
}

console.log(` Voce comprou ${qtde} produtos`);
console.log(`O valor total é R$ ${total.toFixed (2)}`);

