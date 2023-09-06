// exemplo 1: ordenando arrays
const names = ['Christian', 'Alfredo', 'Edson']

// names.sort()

// console.log(names)

// exemplo 2: ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((number1, number2) => number1 - number2) // Ordena de maneira crescente
console.log(scores)

// console.log(scores)

// exemplo 3: ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 },
]

theBigFamily.sort((item1, item2) => {
  if (item1.score > item2.score) {
    return -1
  } else if (item2.score > item1.score) {
    return 1
  }

  return 0
})

console.log(theBigFamily)

// Método de ordenar, se item 2 for maior ele vem primeiro, se for menor ele vem depois
console.log(theBigFamily.sort((item1, item2) => item2.score - item1.score)) // Ordena em decrescente

/**
 * OBS:
 * O sort modifica o array original.
 * O sort em array, por padrão, já traz o array formato em ordem alfabética.
 */
