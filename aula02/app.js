// função tradicional
/*
const double = function (number) {
  return number * 2
}
*/

// arrow function
// OBS: quando a função, recebe apenas 1 parâmetro, podemos remover os parenteses igual o exemplo abaixo, e o default parameter não funciona nesta sintaxe, apenas quando tem os parenteses
/*
const double = number => {
  return number * 2
}
*/

// OBS: quando a arrow function tiver retornando apenas uma linha podemos remover os parenteses e a palavra return, por que o valor vai ser retornado implicitamente, sem a necessidade de especificar a palavra return, exemplo abaixo:
const double = number => number * 2

const result = double(3)
console.log(`O resultado é: ${result}`)

// funções
// O que são funções? São um bloco de código que é criada sozinho, para realizar alguma tarefa.

// métodos
// O que são métodos? Métodos são funções, mas são funções que estão associadas a objetos ou tipo de dados como strings, os métodos são criados no objeto ou no tipo de dado em sí

// forEach e callbacks
const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
  console.log(index, socialNetwork, array)
}

socialNetworks.forEach(logArrayInfo)

// callbacks, é quanto passamos uma função como parâmetro de outra função, essa função é chamada de callback

// utilizando callbacks
const ul = document.querySelector('[data-js="ul"]')

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
  HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`
})

ul.innerHTML = HTMLTemplate
