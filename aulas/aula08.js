prompt = require('prompt-sync')()


/* Estrutura condicional composta e encadeada
Operadores Logicos
&& - e
|| - ou
! - não */

a = 2
b = 3
c = 5
console.log(a < 2 && b < 2)
console.log(a < 1 && b < 2)
console.log(a < 1 && b < 4 && c < 4)
console.log (a < 1 && b < 4 && c < 5)



console.log(a < 2 || b < 2)//false nenhuma condição 
console.log(a < 1 || b < 2)//true pelo menos 1 verdadeiro
console.log(a < 1 || b < 4 || c < 4)//true




let altura = Number(prompt('Qual sua altura?'))
let peso = Number(prompt('Qual seu peso?'))
let imc = peso / (altura*altura)

if (imc < 18.5) {console.log('Abaixo do peso')

}else if (imc >= 18.6 && imc <= 24.9) {console.log('Peso normal')}

else if (imc >= 25 && imc <= 29.9) {console.log('Sobrepeso')}

else if (imc >= 30) {console.log('Obesidade I')}




PrimeiroLado = parseFloat(prompt('Primeiro Lado'))
SegundoLado = parseFloat(prompt('Segundo Lado'))
TerceiroLado = parseFloat(prompt('Terceiro Lado')) 

if (PrimeiroLado!=SegundoLado && SegundoLado!=TerceiroLado && PrimeiroLado!=TerceiroLado) {console.log('Escaleno')}

else if (PrimeiroLado==SegundoLado && SegundoLado==TerceiroLado) {console.log('Equilatero')}  

else {console.log('Isosceles')}
