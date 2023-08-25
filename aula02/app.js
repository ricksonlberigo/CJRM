// if
const age = 20

if (age > 18) {
  console.log('Você tem mais de 18 anos')
}

const simpsons = ['Homer', 'Marge', 'Lisa', 'Bart', 'Maggie']

if (simpsons.length >= 4) {
  console.log('O array tem bastante personagens!')
}

// else e else if statements
const password = 'ovwq1'

/*
if (password.length >= 12) {
  console.log('Senha muito segura!')
} else if (password.length >= 8) {
  console.log('Essa senha tem 8 ou mais caracteres!')
} else {
  console.log('A senha deve conter 8 ou mais caracteres!')
}
*/

// operadores lógicos - "OU" || e "E" &&
if (password.length >= 12 && password.includes('1')) {
  console.log('Senha muito segura!')
} else if (
  password.length >= 8 ||
  (password.includes('1') && password.length >= 5)
) {
  console.log('Essa senha tem 8 ou mais caracteres!')
} else {
  console.log('A senha deve conter 8 ou mais caracteres!')
}
