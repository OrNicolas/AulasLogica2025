const prompt = require('prompt-sync')();

//variaveis

var curso = 'Desenvolvimento de Sistemas'
console.log(curso)
console.log('curso')

idade = 16
console.log(idade)

temperatura = 24.5;// real/float
//--------------------------------------------------------------------------------------------
console.log(temperatura)
//-------------------------------------------------------------------------------------------
nome = 'Nicolas'//string
console.log('Olá, ', nome, 'Hoje está', temperatura, 'Graus,', 'Você tem:', idade, 'anos')
nome = 'Nicolas'//string
console.log('Olá, ' + nome + ',Hoje está \n' + temperatura + 'Graus,\n' + 'Você tem:' + idade + 'anos')

//------------------------------------------------------------------------------------------------
console.log(`Olá, ${nome} você tem ${idade} anos
    está cursando ${curso} hoje faz ${temperatura}ºC`)/*utilizo a `` para criar a string
    para colocar as variáveis utilizo ${varialvel}*/
//--------------------------------------------------------------------------------------------
PodeDirigir = true;
estáChovendo = false;
//variavél nula
escola = null
//---------------------------------------------------------------------------------------------------------------------------------------------
//exercicio
//-----------------------------------------------------------------------------------------------------------------------------------------
//Nota1 Válido
//-----------------
//nomeCompleto Válido
//-------------------
// Nome Completo Inválido
//------------------------
//Média Inválido
//------------------------
//console Inválido
//------------------------
//_salario válido
//------------------------
//9dade Inválido
//------------------------
//Minha_variavel Válido
//------------------------
//var Inválido
//------------------------
//valor$ Inválido
//------------------------
//nome-completo Inválido
//------------------------
//escola_ Válido
//------------------------
//TELEFONE Válido
//------------------------
//true Inválido

//Exercício 2------------------------

idade = 16
peso = 70
nome = 'Nicolas'
console.log(typeof nome, typeof peso, typeof idade)
_idade = prompt('qual sua idade?')
_peso = prompt('Qual seu peso?')
_nome = prompt('qual seu nome?')
console.log(`Me chamo ${_nome} tenho ${_idade} e peso ${_peso}`)


console.log(typeof _nome)
console.log(typeof _idade)
console.log(typeof _peso)


//--------------------------------------------


num1 = prompt('digite o primeiro numero')
num2 = prompt('digite o segundo numero')
number1 = parseFloat(num1)
number2 = parseFloat(num2)
console.log(number1 + number2)

//---------------------------------------------


num3 = prompt('digite o primeiro numero')
num4 = prompt('digite o segundo numero')

num3 = Number(num3)
num4 = Number(num4)
console.log(num3 + num4)


nr1 = Number(prompt('digite o primeiro numero'))
nr2 = Number(prompt('digite o segundo numero'))

console.log(nr1 + nr2)


nr1 = '100.14' //string
nr1 = Number('100.14')
nr1 = parseInt('100.14')
nr1 = parseFloat("100")
nr1 = String(100.14)


_idade = parseInt(prompt('qual sua idade?'))
_peso = parseFloat(prompt('Qual seu peso?'))
_nome = prompt('qual seu nome?')
console.log(`Me chamo ${_nome} tenho ${_idade} e peso ${_peso}`)
