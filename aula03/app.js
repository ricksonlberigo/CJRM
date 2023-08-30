// ==================================== Parents, children e siblings - Aula 03-02
const article = document.querySelector('article')
//  children retorna todos os filhos do elemento em forma de HTMLCollection
// console.log(article.children)

// Para converter em array devemos utilizar essa maneira
// console.log(Array.from(article.children))

// Array.from(article.children).forEach(element => {
//   element.classList.add('article-element')
// })

const title = document.querySelector('h2')
// console.log(title.parentElement.parentElement.parentElement)
// Aqui estamos vendo quem é o pai do elemento selecionado, e como qualquer objeto podemos encadear uma série igual está ocorrendo, assim fica sabendo quem é o pai do pai do pai do elemento

// console.log(title.nextElementSibling) // Aqui ficamos sabendo quem é o próximo irmão no caso vai ser o primeiro p

// console.log(title.previousElementSibling) // Aqui ficamos sabendo quem é o irmão anterior no caso vai ser null, por que ele só tem irmãos no mesmo nível, anterior dele só tem o pai article
// =====================================================================================

// ==================================== Eventos de clique - Aula 03-03
{
  const button = document.querySelector('button')
  button.addEventListener('click', () => {
    // console.log('Clicou no botão')
  })
  const lis = document.querySelectorAll('li')
  lis.forEach(li => {
    li.addEventListener('click', event => {
      const clickElement = event.target
      clickElement.style.textDecoration = 'line-through'
    })
  })
}
// =====================================================================================

// ==================================== Criando e removendo elementos do DOM - Aula 03-04
{
  const ul = document.querySelector('ul')
  // ul.remove() // Remove o elemento do DOM

  const lis = document.querySelectorAll('li')
  lis.forEach(li => {
    li.addEventListener('click', event => {
      const clickElement = event.target
      clickElement.remove()
    })
  })

  const button = document.querySelector('button')
  button.addEventListener('click', () => {
    const li = document.createElement('li') // Método do Document que usamos para criar um elemento HTML, para criar, basta passar no argumento a tag que queremos criar

    li.innerText = 'Novo Item'
    // ul.append(li) // Adiciona o filho ao final
    ul.prepend(li) // Adiciona o filho ao início
  })
}
// =====================================================================================
