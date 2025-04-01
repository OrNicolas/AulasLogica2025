const prompt = require('prompt-sync')();
//declarando variavel sem dados

let nota;


//informação
let nome="carlos";
//outro valor
nome = 'Nicolas'
nota=8.5

let sobrenome = prompt ('Digite se sobrenome') 
let nota1 = parseFloat(prompt ('Digite sua nota'))
let nota2 = parseFloat(prompt ('Digite sua segunda nota'))

let media = (nota1 + nota2)/2
let NomeCompleto2 = ` ${nome} ${sobrenome}`
let idade = Number(prompt ('Digite sua nota'))


console.log ('Relatório Final')
console.log( `Seu nome é: ${NomeCompleto2} \n sua idade é: ${idade} \n sua média é ${media}`) 



 