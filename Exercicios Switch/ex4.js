const prompt = require('prompt-sync')();

entrada1 = prompt('Escolha um mês:\n'+
    '1 - Janeiro\n'+
    '2 - Fevreiro\n'+
    '3 - Março\n'+
    '4 - Abril\n'+
    '5 - Maio\n'+
    '6 - Junho\n'+
    '7 - Julho\n'+
    '8 - Agosto\n'+
    '9 - Setembro\n'+
    '10 - Outubro\n'+
    '10 - Novembro\n'+
    '12 - Dezembro\n')




    switch (entrada1) {
        case '1': console.log('31 Dias')
            break
        case '2': console.log('28 Dias')
             break
        case '3': console.log('31 Dias')
            break
        case '4': console.log('30 Dias')
            break
        case '5': console.log('31 Dias')
        break
        case '6': console.log('30 Dias')
            break
        case '7': console.log('31 Dias')
        break
        case '8': console.log('31 Dias')
            break
        case '9': console.log('30 Dias')
        break
        case '10': console.log('31 Dias')
            break
        case '11': console.log('30 Dias')
        break
        case '12': console.log('31 Dias')
            break
        default: console.log('Nao foi possivel');
            break;
    }
    
