let numeros = [5,6,8,10,21]
let p = []
let i = [] 

for (num of numeros){

if (num % 2 == 1){
    i.push(num)
}
if (num % 2 == 0){
    p.push(num)
}

}
console.log('Pares: ', p);
console.log('Impares: ', i);

