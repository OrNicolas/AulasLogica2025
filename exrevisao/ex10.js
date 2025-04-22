const prompt = require('prompt-sync')();



function intervalo(a,b) {
    

if (a < b) {
    for ( let x = a ; x < b; x++) {
        console.log(x);
    }
}
if (a > b) {
    for ( let x = a ; x > b; x--) {
        console.log(x);
    }
}}

intervalo (a = prompt('Primeiro Número'),b = prompt('Segundo Número'))
