// Function declaration
function sayHi() {
  console.log('Oi')
}

// Function expression
const showFood = function () {
  console.log('Pizza')
}

sayHi()
showFood()

// Argumentos, parâmetros e default parameters
const myFunc = function (name, lastName) {
  console.log(`Oi, ${name} ${lastName}!`)
}

myFunc('Rickson', 'Berigo')

// 1- Argumento é o valor que passamos na chamada da função
// 2- Parâmetros é o que definimos que a função irá possuir
// 3- Caso definimos valores padrões para os parâmetros da função, podemos invocar a função, que os valores serão definidos de acordo com o que passamos na definição dos parâmetros da função

// Retornando valores
const double = function (number) {
  return number * 2
}

const result = double(3)

const showResult = function (value) {
  return `O resultado é: ${value}`
}

console.log(showResult(result))
