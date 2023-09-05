const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

const correctAnswers = ['D', 'A', 'C', 'A', 'A']

const handleQuizPoint = event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 20
    }
  })

  scrollTo(0, 0)

  result.classList.remove('d-none')

  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    result.querySelector('span').textContent = `${counter}%`
    counter++
  }, 20)
}

form.addEventListener('submit', handleQuizPoint)
