/* variaveis compostas, arrays = cabem mais de um dado por vez

aula 12 */



let frutas = ['maçã','banana','pera']
console.log(frutas[0]);

//lista vazia
let carros = []


//Lista Numeros

let nr = [1,2,3,4,5,6,7,8,9]

//lista strings

let nomes = ['ana','joao','maria']


//lista mista 

let listaMista = [4,'feijao', true, 7.55]

//lista de listas

let listas = [listaMista , nr, nomes, frutas]
console.log(listas);


nomes [1]= 'nicolas'
//inserindo um novo item na lista

nomes.push ('Bruno')

frutas=[...frutas, 'laranja']

frutas.splice (2,0,'Morango')

frutas.shift(); //remove o primeiro item da lista
frutas.pop() //remove o ultimo item da lista

//_____________________________________________________

console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);

frutas.sort()//ordenando a lista em ordem crecente
frutas.reverse()//ordenando a lista em ordem decrescente

