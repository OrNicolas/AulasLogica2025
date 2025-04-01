const prompt = require('prompt-sync')();
_valor = Number(prompt('Qual o valor do produto?'))
_descconto = 5
_valorr = (_valor * _descconto) / 100

console.log('valor total:', _valor - _valorr)