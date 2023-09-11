/*
  01

  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      '
const trimmedString = myString.trim()
console.log(trimmedString)

/*
  02

  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 },
]

const peopleOrderedByScore = people
  .map(({ firstName, lastName, score }) => ({
    firstName,
    lastName,
    score,
  }))
  .sort((item1, item2) => item1.score - item2.score)
console.log(peopleOrderedByScore)

/*
  03

  - Gere um novo array com apenas os animais que contém 3 letras no nome;

  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']

const animalsWith3Characters = animals.filter(({ length }) => length === 3)
console.log(animalsWith3Characters)

/*
  04

  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const animalNamesLength = animals.map(({ length }) => length)
console.log(animalNamesLength)

/*
  05

  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false },
]

const nameOfFriendsNearMe = friends
  .filter(({ nearMe }) => nearMe)
  .map(({ name }) => name)
console.log(nameOfFriendsNearMe)

/*
  06

  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]
const oddNumbersSum = numbers
  .filter(number => number % 2) // Como o número par resulta em 0, e 0 é um número falsy, significa que vai dar certo, pois só vai pegar os números que retornar 1, que no caso são números ímpares
  .reduce((acc, number) => acc + number, 0)
console.log(oddNumbersSum)

/*
  07

  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  },
]

const populationSum = data
  .filter(({ country }) => country !== 'China')
  .reduce((acc, { population }) => acc + population, 0)
console.log(populationSum)
