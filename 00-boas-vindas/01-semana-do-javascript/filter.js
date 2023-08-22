/*
Quando você deve usar o filter?

Quando você precisa obter um n ovo array, com um quantidade
de itens menor do que a do array original. 

Exemplo: Em um array de números aleatórios que vai de 1 a 100, eu preciso retornar apenas os números maiores que 37
*/
const randomNumbers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter(item => {
  return item >= 37
})
console.log(numbersGreaterThan37)
