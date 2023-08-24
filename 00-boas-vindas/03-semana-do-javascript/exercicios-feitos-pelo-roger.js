const correctAnswers = ['B', 'A', 'C', 'A']
const finalScoreContainer = document.querySelector('.final-score-container')
const scoreContent = finalScoreContainer.querySelector('.score')
const form = document.querySelector('.quiz-form')

const getUserAnswers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

const getUserScore = userAnswers =>
  userAnswers.reduce(
    (score, userAnswer, index) =>
      userAnswer === correctAnswers[index] ? score + 25 : score,
    0,
  )

const addClasses = ({ bgClass, textClass }) => {
  const classesToRemove = [
    'bg-danger-subtle',
    'text-danger',
    'bg-warning-subtle',
    'text-warning',
  ]

  classesToRemove.forEach(classToRemove => {
    finalScoreContainer.classList.remove(classToRemove)
    scoreContent.classList.remove(classToRemove)
  })

  finalScoreContainer.classList.add(bgClass)
  scoreContent.classList.add(textClass)
}

const changeScoreStyle = counter => {
  if (counter === 0) {
    addClasses({ bgClass: 'bg-danger-subtle', textClass: 'text-danger' })
  }

  if (counter === 33) {
    addClasses({ bgClass: 'bg-warning-subtle', textClass: 'text-warning' })
  }

  if (counter === 75) {
    addClasses({ bgClass: 'bg-success-subtle', textClass: 'text-success' })
  }
}

const showScore = score => {
  scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  finalScoreContainer.classList.remove('d-none')

  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    changeScoreStyle(counter)
    scoreContent.textContent = `${counter++}%`
  }, 20)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const userAnswers = getUserAnswers()
  const score = getUserScore(userAnswers)

  showScore(score)
})
