const prompt = require('prompt-sync')();
function Tabuada(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x*i}`);
    }
    
}

Tabuada(Number(prompt('qual a tabuada?')))