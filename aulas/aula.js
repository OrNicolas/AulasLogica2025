const prompt = require('prompt-sync')()

let frutas = ['maçã','banana','abacaxi','uva']

for (let x = 0; x < frutas.length; x++) 
    {let frutas1 = frutas[x]
    console.log(`posição ${x} é ${frutas1}`)
}

let listaJogadores = ['pelé',' messi' , 'cristiano', 'maradona']
for (let jogador of listaJogadores){
    console.log(jogador);
    
}
//----------------------------------------------------------------------------------------
let a = 0
let num = [1,2,3,4,5,6]
for (let Numeros of num){
    console.log(Numeros);
     a += Numeros
}
console.log('soma: '+ a);
//--------------------------------------------------------------------------------------
//obtendo a posição de um array, usando for of
let vogais =[ 'a' , 'e', 'i' , 'o' , 'u' ]
let numeros1= [ '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ]
let consoantes = ['b' , 'c' , 'd' , 'f' , 'g' , 'h' , 'j' , 'k' , 'l' , 'm' , 'n' , 'p' , 'q' , 'r' , 's' , 't' , 'v' , 'w' , 'x' , 'y' , 'z']
let verificar = prompt ('Digite uma letra: ')
if (vogais.includes(verificar.toLowerCase())){
    console.log(verificar + ' é '+'vogal')  
    
} else if (consoantes.includes(verificar.toLowerCase())){
    console.log(verificar + ' é '+'consoante')
}
else {if (numeros1.includes(verificar)){
    console.log(verificar + ' é '+'número')
} else {
    console.log(verificar + ' é '+'caractere especial')}
}
    

//-----------------------------------------------------------------------------------------
//obtendo a posição de um array, usando for of

let listafrutas = ['maçã','banana','abacaxi','uva']
for (const [index, fruta] of listafrutas.entries()) {console.log(`posição ${index} é ${fruta}`)}




let produtos = 'celular , computador , tablet , notebook'
let listaprodutos = produtos.split(',')
console.log(produtos)
console.log(listaprodutos)

//--------------------------------------------------------------------------------------------------

let escola = 'senai'

for (let letra of escola){
    console.log(letra.toUpperCase());

}
