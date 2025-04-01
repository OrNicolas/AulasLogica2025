const prompt = require('prompt-sync')()
/*let ind 
a = Number(prompt('qual o numero?'))
for (let ind = 1; ind <= 20; ind++ ) {
    console.log(a * ind)
}

//______________________________________________________________________________________
//iniciamos no 0, permanece no bloco até o 50, contando de 5 em 5 a cada repetição
for (contador = 0; contador <= 50; contador +=5){
    console.log(contador);
    
}
//usando o break para parar o for
for (contador = 0; contador <= 500; contador++){
    console.log(contador);
if (contador ==53){
    break

}

}


*/


console.log('Entregando os notebooks');
for (let nr=1;nr <=32 ; nr++){

let nome = prompt ('Quem é o ' + nr)
let Presenca = prompt (`o(a)${nome} esta presente? S/N`)
if(Presenca=='S'){

console.log(`pegar o notebook número ${nr}`);
console.log(`levar o notebook número ${nr} para ${nome}`);

}else {console.log('Não pegar o notebook');
}

}

