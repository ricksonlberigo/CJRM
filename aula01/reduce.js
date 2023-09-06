const numbers = [1, 2, 3]
const sumResult = numbers.reduce((acc, item) => acc + item, 0)
console.log(sumResult)

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 },
]

const rogerScore = phaseScores.reduce((acc, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    acc += phaseScore.score
  }
  return acc
}, 0)

const totalScores = phaseScores.reduce((acc, { score }) => score + acc, 0)

console.log(rogerScore)
console.log(totalScores)

// Reduce - similar ao outros como funcionamento, só usamos quando baseado no array original a gente precisar reduzir o array a algum outro tip de dado, ou até mesmo um novo array
