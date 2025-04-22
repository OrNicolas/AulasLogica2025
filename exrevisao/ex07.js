const prompt = require('prompt-sync')();


a = prompt ('quanto você recebe por hora?')
b = prompt ('quantas horas vocé trabalha por mes?')
salariobruto = a*b

ir = salariobruto * 0.11
inss = salariobruto * 0.08
sindicato = salariobruto * 0.05
salarioliquido = salariobruto - ir - inss - sindicato

console.log('salario bruto', salariobruto, 'ir', ir, 'inss', inss, 'sindicato', sindicato, 'salario liquido :', salarioliquido);


