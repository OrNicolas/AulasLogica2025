const prompt = require('prompt-sync')();


let a = Number(prompt('Numero Fator:'))
let b = 1
while (a>1) {
   
b = b * a
a--
}
    
console.log(b)