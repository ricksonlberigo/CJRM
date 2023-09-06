const randomNumbers = [36, 99, 37, 63]
const numbersGreaterThan37 = randomNumbers.filter(randomNumber => {
  if (randomNumber > 37) {
    return randomNumber
  }
})

console.log(numbersGreaterThan37)

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true },
]

const usersPremium = users.filter(user => user.premium)

console.log(usersPremium)

// Filter, é similar ao map, quando baseado em uma condição você precisar obter um novo array com só alguns itens do array original
// Caso o objeto que você quer verificar seja boolean, não precisa de uma condição, pois o filter só pega os valores true
