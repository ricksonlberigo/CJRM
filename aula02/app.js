const form = document.querySelector('form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const isAValidUsername = testUsername(username)

  if (isAValidUsername) {
    feedback.textContent = 'username válido =)'
    return
  }

  feedback.textContent =
    'O username deve conter entre 6 a 12 caracteres e deve conter apenas letrar.'
})

form.username.addEventListener('keyup', event => {
  const username = event.target.value
  const isAValidUsername = testUsername(username)

  if (isAValidUsername) {
    form.username.setAttribute('class', 'success')
    return
  }

  form.username.setAttribute('class', 'error')
})
