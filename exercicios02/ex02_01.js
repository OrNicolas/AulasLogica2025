const prompt = require('prompt-sync')();

entrada1= prompt('Primeira Nota')
entrada2= prompt('Segunda Nota')
nt1=parseFloat (entrada1)
nt2=parseFloat (entrada2)

media = (nt1+nt2)/2

if (media > 7) {console.log('Esta aprovado')}
else console.log('Esta Reprovado')