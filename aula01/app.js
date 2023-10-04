// ==================================== Mais sobre o Spread Operator: Unindo objetos e arrays - Aula 01-05
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
// const newArray = arr1.concat(arr2)
const newArray = [0, ...arr1, 3.5, ...arr2, 7]

console.log(newArray)

const obj1 = { prop1: 1, prop2: 2 }
const obj2 = { prop3: 3, prop4: 4 }
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }

console.log(obj3)

// =====================================================================================

// ==================================== Mais sobre o Spread Operator: Casos de uso em strings e funções - Aula 01-06
const getReversedString = string => [...string].reverse().join('')

console.log(getReversedString('Rickson'))

const numbers = [7, 8, 2.3, 4, 2, 6, 10]

// Os método min e max não aceita passar um array como argumento, porém se usarmos o spread operator, podemos espalhar os itens do array dentro da função
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

// =====================================================================================
