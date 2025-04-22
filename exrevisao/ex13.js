const prompt = require('prompt-sync')();
let nota = 0

function bimestre() {
    
for (let x = 1 ; x <=4; x++){
    a = Number(prompt('Qual a nota?'))
nota += a 
}

media = nota/4 
console.log('A média é:', media);

if (media<7){
    console.log('Esta Reprovado');
    
}

if (media>7){
    console.log('Esta Aprovado');
    
}
}

bimestre()