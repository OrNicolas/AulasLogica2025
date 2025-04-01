const prompt = require('prompt-sync')();
//Operações com variáveis

entrada1= prompt('Primeiro Numero')
entrada2= prompt('Segundo Numero')

nr1=parseFloat (entrada1)
nr2=parseFloat (entrada2)

console.log('Soma:', nr1+nr2, 'Divisão:',nr1/nr2, 'multiplicação:',nr1*nr2, 'Subtração:',nr1-nr2, 'Expoente:', nr1**nr2)

//--------------------------------------------------------------------


num1 = 10
num2= 20

soma=num1+num2
Subtração=num1-num2
Multiplicacao=num1*num2
Divisao=num1/num2
Expoente=num1**num2
console.log('Soma:',soma, 'Subtração:', Subtração, 'multiplicação:',Multiplicacao, 'Divisão:', Divisao , 'Expoente:',Expoente)



//-----------------------------------------------------------------------

celular=1200
desconto=120
valor=celular-desconto

console.log('O valor total, com desconto é:', valor)
//--------------------------------------------------------------------------

_valor=Number(prompt('Qual o valor do celular?'))
_descconto=Number(prompt('Qual o valor do Desconto em %?'))
_valorr=( _valor * _descconto)/100

console.log('valor total:', _valor-_valorr)
//--------------------------------------------------------------------------------------------------------

//reatribuição de valor

var nmr = 4/2
nmr = nmr ** 2;
nmr = nmr * (50-20)
console.log ('o valor é', nmr)

//---------------------------------------------------------



hero1=parseFloat(prompt('Qual o numero?'))

dobro=hero1*2
metade=hero1/2
seguido=hero1*2/2

console.log('Dobro', dobro, 'Metade:', metade,'Seguido:', seguido)

//----------------------------------------------------------------------------------

dia=800
valor_cobrado=dia*15
console.log('Valor Cobrado:', valor_cobrado)