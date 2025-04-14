const prompt = require('prompt-sync')();


function saudação () {
    nome = prompt ('Qual seu nome?: ')
   console.log(`Tenha um bom dia ${nome}!`);

   
}
for (let x = 0; x<3;x++){
   saudação()
}

