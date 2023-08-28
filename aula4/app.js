// Booleans e comparações
// console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('#') // Verifica se o caracter passado como argumento, está incluso dentro da string, retorna true ou false
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('rob') // retorna false

// Operadores de comparação
const age = 31
const myName = 'Rickson'

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35) // Idade não é igual a 35, verdadeiro
// console.log(age != 31) // Idade não é igual a 31, falso
// console.log(age > 31)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

// console.log(myName == 'Rickson')
// console.log(myName == 'rickson')
// console.log(myName > 'belinha')
// console.log(myName > 'Belinha')

// As últimas letras do alfabeto é maior do que as primeiras
// Caracteres minusculas é maior do que caracteres maiúsculas

// 'igual a, e do mesmo tipo' e 'diferente de, e do mesmo tipo'
// console.log(age === 31)
// console.log(age === '31')
// console.log(age !== 31)
// console.log(age !== '31')

// Conversão de tipos
let score = '100'
score = Number(score)
console.log(score + 1)
