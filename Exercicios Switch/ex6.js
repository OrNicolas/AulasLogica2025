const prompt = require('prompt-sync')();


let entrada1 = Number (prompt('Salario:'))

let a 

if (entrada1 <=2000 ){   a = (entrada1*12)/100

} else {
    if (entrada1 >2000 && entrada1 <=4000) {
         a = (entrada1*10)/100
    }else {
        if (entrada1 > 4000) {  a = (entrada1*8)/100}
    }
}
console.log('Sálario:'+ (a + entrada1));



