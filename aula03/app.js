// ==================================== Funções de callback - Aula 03-03
/*
const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      callback(null, request.responseText)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
  console.log('Callback executado')
  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})

console.log(3)
console.log(4)
*/
// =====================================================================================

// ==================================== Trabalhando com JSON (JavaScript Object Notation) - Aula 03-04
/*
const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      // COnvertendo o JSON em um array de objetos
      const data = JSON.parse(request.response)
      callback(null, data)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })

  request.open('GET', './todos.json')
  request.send()
}

getTodos((error, data) => {
  console.log('Callback executado')
  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})
*/

// =====================================================================================

// ==================================== Callback Hell (Pyramid of Doom) - Aula 03-05
const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })

  request.open('GET', url)
  request.send()
}

// Callback hell (Pyramid of Doom) - São callbacks aninhadas que formam um triângulo
getTodos('./json/todos.json', (error, data) => {
  console.log(data)
  getTodos('./json/todos-02.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-03.json', (error, data) => {
      console.log(data)
    })
  })
})

// =====================================================================================
