const prompt = require('prompt-sync')();

a = prompt('Qual seu gênero? F/M')

switch (a) {
    case 'F':
        console.log('Feminino');
        break;
    case 'M':
        console.log('Masculino');
        break;
    default:
        console.log('Outros');
        break;
}
