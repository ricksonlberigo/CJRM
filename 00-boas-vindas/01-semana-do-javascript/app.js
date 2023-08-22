/*
Quando você deve usar o map?

Quando você precisar obter um novo array, com a mesma
quantidade de itens do array original porém transformados.
Ao utilizar o map sempre utilizar o return, e o map não modifica o
array original.

Exemplo: Multiplicar todos os números de um array por 2.
*/

const numbers = [1, 2, 3]
console.log(`Array Original: ${numbers}`)
const doubledNumbers = numbers.map(item => item * 2)
console.log(`Array Multiplicado por Dois: ${doubledNumbers}`)
/*
Ou
numbers.map((item) => {
  return item * 2;
});
*/

// Aos produtos com o preço maior do que trinta, aplicar uma promoção que é a metade do preço
const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 },
]
const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price / 2,
    }
  }
  return product
})
console.log(saleProducts)
