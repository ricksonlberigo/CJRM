const correctAnswers = ['B', 'A', 'C', 'A']
const finalScoreContainer = document.querySelector('.final-score-container')
const scoreContent = finalScoreContainer.querySelector('.score')
const form = document.querySelector('.quiz-form')

// let score = null

const getUserAnswers = () =>
  correctAnswers.map((_, index) => form[`inputQuestion${index + 1}`].value)

/*
const getUserAnswers = () => {
  const userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = form[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })

  return userAnswers
}
*/

/*
const calculateUserScore = userAnswers => {
  score = 0
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (isUserAnswerCorrect) {
      score += 25
    }
  })
}
*/

const getUserScore = userAnswers =>
  userAnswers.reduce(
    (score, userAnswer, index) =>
      userAnswer === correctAnswers[index] ? score + 25 : score,
    0,
  )

// const showFinalScore = () => {
//   scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })

//   finalScoreContainer.classList.remove('d-none')
// }

//

const addClasses = () => {
  const classesToRemove = [
    'bg-danger-subtle',
    'text-danger',
    'bg-warning-subtle',
    'text-warning',
  ]
}

const changeScoreStyle = counter => {
  if (counter === 0) {
    finalScoreContainer.classList.add('bg-danger-subtle')
    scoreContent.classList.add('text-danger')
  }

  if (counter === 33) {
    finalScoreContainer.classList.remove('bg-danger-subtle')
    scoreContent.classList.remove('text-danger')
    finalScoreContainer.classList.add('bg-warning-subtle')
    scoreContent.classList.add('text-warning')
  }

  if (counter === 75) {
    finalScoreContainer.classList.remove('bg-danger-subtle')
    scoreContent.classList.remove('text-danger')
    finalScoreContainer.classList.remove('bg-warning-subtle')
    scoreContent.classList.remove('text-warning')
    finalScoreContainer.classList.add('bg-success-subtle')
    scoreContent.classList.add('text-success')
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
