const prompt = require('prompt-sync')();
salario = parseFloat (prompt ( 'Qual o Seu salario?'))



let irpr = 0; // Inicializa a variável

if (salario >= 0 && salario <= 2259.20) {
    irpr = 0;
} else if (salario > 2259.20 && salario <= 2826.65) {
    irpr = (salario * 7.5) / 100;
} else if (salario > 2826.65 && salario <= 3751.05) {
    irpr = (salario * 15) / 100 ;
} else if (salario > 3751.05 && salario <= 4664.68) {
    irpr = (salario * 22.5) / 100 ;
} else if (salario > 4664.68){
    irpr = (salario * 27.5) / 100;
}




//_________________________________________________________________________________

let salario1 = 0
let inss 

if (salario >=0 && salario  <= 1412.00) {inss = (salario*7.5)/100

}else {
    if ( salario <=2666.68 && salario > 1412.00){
        salario1 = 2666.68-1412.00
        inss = (salario1*9)/100

    }else {
        if (salario <=4000.03 && salario > 2666.68){
            salario1 = 4000.03-2666.68
            inss = (salario1*12)/100

        }else { 
            if (salario < 7786.02 && salario > 4000.03) {
                salario1 = 7786.02 - 4000.03
                inss = (salario1*14)/100
            }else {
                if (salario >= 7786.02 ) {
                    inss=908.85
                    }
            }
        }
    }
}


salarioFinal = salario - inss - irpr
console.log ('O Valor do inss é:' + inss)
console.log ('O Valor do irpr é:' + irpr)
console.log ('O salario final é:' + salarioFinal) 


