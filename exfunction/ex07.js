 const prompt = require('prompt-sync')();
// function Senha(tamanhosenha) {
    
    
//     const caractere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
//     let senha1 = ''
    
//     for(let i = 0; i < tamanhosenha; i++) {
//         let senha = Math.floor(Math.random() * caractere.length)
//         senha1 += caractere[senha] }
//         return senha
        
//     }
    
//     tamanhosenha = 4
//     senhagerada = Senha(tamanhosenha)


function Senha(tamanhosenha) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha1 = '';

    for (let i = 0; i < tamanhosenha; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha1 += caracteres[indice];
    }

    return senha1;
}

let tamanhosenha = parseInt(prompt("Digite o tamanho da senha: "));
let senhagerada = Senha(tamanhosenha);
console.log("Senha gerada:", senhagerada);



//indice = senha 