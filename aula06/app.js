// ==================================== Requests paralelos vs. Sequenciais - Aula 06-03
const getPokemons = async () => {
  const bulbasaur = fetch('http://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('http://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('http://pokeapi.co/api/v2/pokemon/7')

  // Dessa maneira a gente faz os requests serem paralelos
  const results = await Promise.all([bulbasaur, charmander, squirtle])
  results.forEach(async response => console.log(await response.json()))

  // console.log(await bulbasaur.json())
  // console.log(await charmander.json())
  // console.log(await squirtle.json())
}

getPokemons()
// =====================================================================================

// ==================================== Tratando erros com try/catch - Aula 06-04
try {
  console.log(oi)
} catch (error) {
  if (
    error.name === 'ReferenceError' &&
    error.message === 'oi is not defined'
  ) {
    const oi = 'const oi criada'
    console.log(oi)
  }
}
console.log('oi')
// =====================================================================================

// ==================================== Try/catch em requests e erros personalizados - Aula 06-05
{
  // Método menos conciso porém mais legível
  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
  }
}

// Método mais conciso porém menos legível
const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados!')
    }

    return response.json()

    // return await (await fetch('./json/todoss.json')).json()
  } catch (error) {
    console.log(error.message)
  }
}

/* Explicando como está funcionando o método getUsers
  A primeira operação a ser executada é a que está entre parenteses no caso vai ser o (await fetch('https://jsonplaceholder.typicode.com/users'))
  Essa invocação fetch('https://jsonplaceholder.typicode.com/users') vai resultar em uma Promise que contém o objeto Response e como antes da invocação existe o método await (await fetch('https://jsonplaceholder.typicode.com/users')), ele vai desencapsular o objeto Response então a expressão await fetch('https://jsonplaceholder.typicode.com/users') completa resulta em um objeto Response e como encadeamos o .json no final da expressão, toda a expressão retorna uma Promise com o objeto Response parseada em JSON, o await inicial da função vai desencapsular o valor da Promise inteira, que é o array de objetos e toda essa expressão resulta no array de objetos que essa função está retornando.
*/

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()
// =====================================================================================
