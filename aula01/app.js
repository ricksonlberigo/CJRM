// ==================================== Introdução ao localStorage - Aula 01-03
// =====================================================================================

// ==================================== Armazenando e obtendo dados - Aula 01-04
localStorage.setItem('name', 'Rickson')
localStorage.setItem('age', 20)

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age)
// =====================================================================================

// ==================================== Removendo dados - Aula 01-05
localStorage.removeItem('name') // remove o dado passado como argumento da localStorage
localStorage.clear() // limpa todos os dados da localStorage
// =====================================================================================

// ==================================== Stringficando e parseando dados - Aula 01-06
const myArray = [
    {a: 1, b: 2},
    {c: 1, d: 4},
    {e: 5, d: 6}
]

localStorage.setItem('myArray', JSON.stringify(myArray))

const jsonFromLocalStorage = localStorage.getItem('myArray')
const myConvertedArray = JSON.parse(jsonFromLocalStorage)
console.log(myConvertedArray);
// =====================================================================================
