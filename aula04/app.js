// ==================================== Introdução a promises - Aula 04-03
/*
const getTodos = url =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4

      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados da API')
      }
    })

    request.open('GET', url)
    request.send()
  })

getTodos('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.log(error))

// O que é uma promise - é um objeto que representa o sucesso ou a falha de uma operação assíncrona.
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('Dados aqui')
    // reject('Erro aqui')
  })
}

getData()
  // .then() é o método responsável por receber a resposta de sucesso da promise.
  .then(value => console.log(value))
  // .catch() é o método que cuidamos do que deve acontecer quando a resposta obtida da operação não for uma resposta de sucesso, só usamos em duas operações a primeira é quando dentro da promise nós invocamos o reject e segundo é quando o código dentro do than lança um erro.
  .catch(error => console.log(error))
*/
// =====================================================================================

// ==================================== Encadeando promises - Aula 04-04
const getPokemon = url =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4

      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados do Pokémon.')
      }
    })

    request.open('GET', url)
    request.send()
  })

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur.name)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander.name)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(squirtle => console.log(squirtle.name))
  .catch(error => console.log(error))
// =====================================================================================
