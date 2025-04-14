const prompt = require('prompt-sync')();

function imparPar(nr) {
    
    nr = Number(prompt('Qual seu número'))

if (nr % 2 == 0) {
    
    console.log('É Par');
}
if (nr % 2 == 1) {
    console.log('É Impar');
    
    
}
}

imparPar()
imparPar()