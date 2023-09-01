// ==================================== Event bubbling e event delegation - Aula 04-02
const ul = document.querySelector('ul')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const li = document.createElement('li')

  li.textContent = 'Novo Item'
  ul.prepend(li)
})

// const lis = document.querySelectorAll('li')

// lis.forEach(li => {
//   li.addEventListener('click', event => {
//     const clickedElement = event.target
//     console.log('Clicou na LI')

//     event.stopPropagation()
//     clickedElement.remove()
//   })
// })

ul.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'LI') {
    clickedElement.remove()
  }
})
// =====================================================================================

// ==================================== Mais eventos do DOM - Aula 04-03
const paragraph = document.querySelector('.copy-me')
paragraph.addEventListener('copy', () => {
  console.log('Texto copiado')
})
// Evento de copy - copiar texto selecionado

const div = document.querySelector('.box')
div.addEventListener('mousemove', event => {
  div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`
})
// Evento mousemove - mostra onde o cursos do mouse está em relação ao elemento selecionado

document.addEventListener('wheel', event => {
  console.log(event)
})
// Evento wheel - mostra quando rolamos a página
// =====================================================================================
