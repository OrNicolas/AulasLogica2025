const prompt = require('prompt-sync')();
let times = [
    'Corinthians',
    "Bahia",
    "Botafogo",
    "RB Bragantino", 
    "Ceará",
    "Atlético-MG",
    "Cruzeiro",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Sport",
    "Vasco da Gama", 
    "Vitória",
    "Palmeiras",
    "Santos",
    "São Paulo",
    
];


console.log(`O campeão do brasileirão de 2025 foi: ${times[0]}`);
console.log(`os times classificados para a libertadores 2026 foram ${times.slice(0,4)}`);
console.log(`os times rebaixados foram ${times.slice(-4)}`);

