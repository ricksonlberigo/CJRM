// ==================================== Data e hora em JavaScript - Aula 01-02
const present = new Date()
console.log(
  present,
  `getFullYear: ${present.getFullYear()}`,
  `getMouth: ${present.getMonth()}`,
  `getDate: ${present.getDate()}`,
  `getDay: ${present.getDay()}`,
  `getHours: ${present.getHours()}`,
  `getMinutes: ${present.getMinutes()}`,
  `getSeconds: ${present.getSeconds()}`,
)

console.log('timestamp: ', present.getTime())

console.log('toDateString: ', present.toDateString()) // Pega apenas a data em forma de string
console.log('toTimeString: ', present.toTimeString()) // Pega apenas o horário em forma de string
console.log('toLocaleString: ', present.toLocaleString()) // Pega ambos em formato de string - convenção americana

// Ao invocarmos a função construtora Date, se passarmos nada como argumento, ela sempre vai criar a data atual
// new é inserido antes do construtor para criar o objeto
// A contagem de meses com a classe Date é 0 base, começa a contagem pelo 0, então seria assim:
/*
[
  0 => 'Jan',
  1 => 'Fev',
  2 => 'Mar',
  3 => 'Abr',
  4 => 'Mai',
  5 => 'Jun',
  6 => 'Jul',
  7 => 'Ago',
  8 => 'Set',
  9 => 'Out',
  10 => 'Nov',
  11 => 'Dez',
]
*/

// getDate retorna o dia atual
// getDay retorna o dia da semana, a contagem também é 0 base:
/*
[
  0 => 'Domingo', 
  1 => 'Segunda', 
  2 => 'Terça', 
  3 => 'Quarta', 
  4 => 'Quinta', 
  5 => 'Sexta', 
  6 => 'Sábado'
]
*/
// =====================================================================================

// ==================================== Timestamps e comparações - Aula 01-03
const past = new Date('May 1 2020 7:47:00')
const presentDate = new Date()

const difference = present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
console.log(seconds)

const minutes = Math.round(seconds / 60)
console.log(minutes)

const hours = Math.round(minutes / 60)
console.log(hours)

const days = Math.round(hours / 24)
console.log(days)

console.log(`Escrito há ${days} dias.`)

const timestamp = 1653414454413
console.log(new Date(timestamp))

// =====================================================================================
