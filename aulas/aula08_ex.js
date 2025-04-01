const prompt = require('prompt-sync')();

ValorVendas = Number(prompt('Qual o valor total das vendas?'))
HorasTrabalhadas = Number(prompt('Quantas horas semanais trabalhadas?'))

if (ValorVendas > 5000 || HorasTrabalhadas > 40) {
     console.log('Vendedor recebe bonus da empresa'); 
    }
else {
     console.log('Vendedor nao recebe bonus da empresa'); 
    }



   let letra =String( prompt('Qual a letra?'))

  if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
     console.log('Vogal');}
  else {
     console.log('Consoante');}