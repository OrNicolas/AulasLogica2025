const prompt = require('prompt-sync')();

let letra =String( prompt('Qual a letra?'))

  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
     console.log('Vogal');}
  else {
     console.log('Consoante');}