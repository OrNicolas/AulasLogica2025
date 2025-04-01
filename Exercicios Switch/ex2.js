const prompt = require('prompt-sync')();


entrada1 = Number(prompt('Ano de Nascimento:'))

idade = 2025 - entrada1;


console.log(idade);

//__________________________________________________________________


if (idade < 10) {console.log('É criança')

}else { 
    if (idade >= 10 && idade <= 17) {console.log('É adolescente')

    }else {
        if(idade >= 18 && idade <= 59){console.log('É adulto')

        }else {
            if (idade >= 60) { console.log('É idoso')}
        }
    }
}
