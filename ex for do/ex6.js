const prompt = require('prompt-sync')()

palavra=prompt('Digite uma palavra: ')
let a = 0
let vogais =[ 'a' , 'e', 'i' , 'o' , 'u' ]

for(letra of palavra){
    if(vogais.includes(letra.toLowerCase())){
        a++
    }
}
console.log(a);
