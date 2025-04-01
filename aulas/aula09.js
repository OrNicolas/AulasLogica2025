const prompt = require('prompt-sync')()



valorCompra = 120
clienteVip = true


if (valorCompra >= 100) {
    if (clienteVip = true) {
        console.log(`você ganhou R$ ${valorCompra * 10 / 100}`);

    } else {
        desconto = valorCompra * 5 / 100;
        console.log(` Voce ganhou  R$${desconto} de desconto`);

    }



} else {
    restante = valorCompra - 100;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);

}






//--------------------------------------------------------------------------------------------------------------
idade = Number(prompt('Qual sua Idade?'))

if (idade) {
    if (idade < 16) { console.log('Não pode votar') }
    if (idade >= 16 && idade < 18) { console.log('Voto Facultativo') }

    if (idade >= 18 && idade <= 70) { console.log('Voto Obrigatorio') }

    if (idade > 70) { console.log('Voto Facultativor') }


}





if (idade < 16) {
    console.log('Não pode votar')

} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto Facultativo')

    } else {
        if (idade >= 18 && idade <= 70) {
            console.log('Voto Obrigatorio')

        } else {
            if (idade > 70) { console.log('Voto Facultativor') }

        }
    }
}

//_______________________________________________________________________________________________________________________________________________________________________


entrada1 = prompt('Primeiro Numero')
entrada2 = prompt('Segundo Numero')

nr1 = parseFloat(entrada1)
nr2 = parseFloat(entrada2)
cal = prompt('Qual é a operação? ' +
    '\n A - Soma ' +
    '\n  B - Subtração' +
    '\n C - Divisão' +
    '\n  D - Multiplicação' +
    '\n E - Expodencial')


switch (cal) {
    case 'A': console.log(nr1 + nr2)
        break
    case 'B': console.log(nr1 - nr2)
    case 'C': console.log(nr1 / nr2)
        break
    case 'D': console.log(nr1 * nr2)
        break
    case 'E': console.log(nr1 ** nr2)
        break
    default: console.log('Nao foi possivel');
        break;
}

