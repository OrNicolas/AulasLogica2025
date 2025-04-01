const prompt = require('prompt-sync')();


v = parseFloat( prompt( 'kms percorridos'))
v2 = parseFloat( prompt( 'dias alugados'))

pp= (v2*60)+(v*0.15)
console.log('Valor total:'+ pp)