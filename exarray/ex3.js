const prompt = require('prompt-sync')();


let array1 = []
for (let i = 0; i < 6; i++) {
    array1.push ( prompt('Qual a comida?'))
   
}
console.log(array1);
console.log(array1[0]);
console.log(array1[4]);
console.log(array1[array1.length -1] = 'lasanha');
console.log(array1.push('pizza'));
console.log(array1.splice(5,0, 'banana'));
console.log(array1.shift);
console.log(array1.pop);
console.log(array1.splice(0,3));
console.log(array1.splice(-4));
array1.sort();
console.log(array1);
array1.reverse();
console.log(array1);
