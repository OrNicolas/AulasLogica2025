const prompt = require('prompt-sync')();
nomeAluno='Nicolas'
Altura=1.73
Escola='Sesi'
anoAtual='2ºB'
console.log(nomeAluno, Altura, Escola, anoAtual)
//------------------------------------------------------
let nomeProfessor = 'Carlos'
let Materia_Prof = 'Historia'
let Ano_ingresso = 2023

console.log(nomeProfessor, Materia_Prof, Ano_ingresso)

//----------------------------------------------------------

anoAtual =(prompt('Ano atual?'))
nomeAluno = (prompt('Qual o nome?'))
Altura = parseFloat (prompt('Qual sua altura?'))
Escola =(prompt('Qual sua Escola'))      


console.log(nomeAluno, Altura, Escola, anoAtual)