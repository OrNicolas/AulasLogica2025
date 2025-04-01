const prompt = require('prompt-sync')();


entrada1 = prompt('Digite um número de 1 a 12')





switch (entrada1) {
    case '1': console.log('Janeiro')
        break
    case '2': console.log('Fevereiro')
         break
    case '3': console.log('Março')
        break
    case '4': console.log('Abril')
        break
    case '5': console.log('Maio')
    break
    case '6': console.log('Junho')
        break
    case '7': console.log('Julho')
    break
    case '4': console.log('Agosto')
        break
    case '5': console.log('Setembro')
    break
    case '6': console.log('Outubro')
        break
    case '7': console.log('Novembro')
    break
    case '7': console.log('Dezembro')
        break
    default: console.log('Nao foi possivel');
        break;
}

