const prompt = require('prompt-sync')();



entrada1 = prompt('Primeiro Numero')
entrada2 = prompt('Segundo Numero')

nr1 = parseFloat(entrada1)
nr2 = parseFloat(entrada2)

media = (nr1 + nr2) / 2

if (media > 7) {console.log('Aprovado');

}else {
    if (media == 5 || media < 7) {console.log('Em recuperação');
        
    if(media < 5){console.log('Reprovado');}
}
}

   


