// o operador logico not (!)
let isUserLoggedIn = false

if (!isUserLoggedIn) {
  console.log('Você precisa fazer login para continuar')
}
console.log(!true)
console.log(!false)

// break e continue
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue
  }

  console.log(`sua pontuação: ${scores[i]}`)

  if (scores[i] === 100) {
    console.log('parabéns, você atingiu a pontuação máxima')
    break
  }
}

// switch statement
const grade = 'A'

switch (grade) {
  case 'A':
    console.log('Parabéns você tirou nota A')
    break
  case 'B':
    console.log('Parabéns você tirou nota B')
    break
  case 'C':
    console.log('Infelizmente você tirou nota C')
    break
  case 'D':
    console.log('Infelizmente você tirou nota D')
    break
  case 'E':
    console.log('Infelizmente você tirou nota E')
    break
  default:
    console.log('Nota inválida')
}
