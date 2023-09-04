// ==================================== O evento submit - Aula 01-03
const form = document.querySelector('.sigup-form')
// const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  // Prevenindo o comportamento padrão do formulário
  event.preventDefault()

  console.log(form.username.value)
})

// Quado dentro do form, possuir um input com id ou name, podemos referenciar dentro do evento esse input, sem criar uma const com uma query, dessa maneira
// form.username, form é o nome da const que selecionamos o form, e username é o id do input que está dentro do form
// =====================================================================================

// ==================================== Expressões Regulares - Aula 01-04
const username = 'rickson'
const pattern = /^[a-z]{6,}$/
// const isAMath = pattern.test(user)
// if (isAMath) {
//   console.log('O teste da regex passou =)')
// } else {
//   console.log('O teste da regex não passou =(')
// }

const result = username.search(pattern)
console.log(result)
// =====================================================================================

// ==================================== Testando padrões de regex - Aula 01-05

// =====================================================================================
