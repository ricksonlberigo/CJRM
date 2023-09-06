const numbers = [1, 2, 3]

const double = numbers.map(number => number * 2)
console.log(double)

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 },
]

const saleProducts = products.map(product => {
  const priceIsMoreThan30 = product.price >= 30
  if (priceIsMoreThan30) {
    return { name: product.name, price: product.price / 2 }
  }

  return product
})

console.log(products)
console.log(saleProducts)

// Map serve para retornar um novo array com o mesmo índice de elementos que o array que foi utilizado o map, mas para altear algum valor do array
