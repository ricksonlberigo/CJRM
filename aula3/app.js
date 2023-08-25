// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19, 18]

// Métodos de arrays
const joinHeroes = heroes.join('-') // Separa o array em uma string, utilizando o separador que você passar, caso não passe, será adicionado uma virgula]

const indexOf25 = ages.indexOf('25') // Encontra a localização do primeiro index do argumento passado, caso seja uma string ou valor inexistente vai retornar -1

const moreHeroes = heroes.concat(['Superman', 'Wolverine']) // Concatena um array no array que foi utilizado o método concat

// Mutação de valores
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // Adiciona na última posição do array original e retorna a quantidade de itens, modifica o array original

const popToHeroes = heroes.pop() // remove na última posição do array original e retorna o item retirado, modifica o array original

// Null e Undefined
