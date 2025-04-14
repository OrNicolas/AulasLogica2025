let veiculo = 'gol;corsa;palio;monza'

let listaprodutos = veiculo.split(';')

for (const [index, listacarros] of listaprodutos.entries()) {
    console.log(`posição ${index} é ${listacarros}`)
}
