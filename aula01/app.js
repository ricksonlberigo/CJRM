// ==================================== Query Selector & query selector all - Aula 01-07
// Selecionando usando seletor CSS
const paragraph = document.querySelector('.error')

// Selecionando usando selector mais específico do CSS
const errorDiv = document.querySelector('div.error')

// Selecionando utilizando o seletor único do próprio Browser
const h2 = document.querySelector('body > div > h2') // Para fazer isso, inspeciona o elemento, clica no mouse do lado direito nele evai em copy > "copy selector"

// Selecionando utilizando o seletor múltiplo
const paragraphs = document.querySelectorAll('p')

// Utilizando o seletor único, gera um elemento, ao utilizar o seletor múltiplo, o retorno dele é uma NodeList (Lista de nós)
// NodeList é semelhante a um array, porém não é possível utilizar todos os métodos de array nele

paragraphs[1] // Como um array, podemos utilizar a busca por um elemento utilizando os colchetes [], e podemos percorrer um forEach neles
paragraphs.forEach(paragraph => {
  // console.log(paragraph)
})

// Selecionando todos os elementos que possui a classe "error"
const errors = document.querySelectorAll('.error')
// console.log(errors)

// querySelector e querySelectorAll, é os métodos mais eficientes para selecionar elementos do DOM
// =====================================================================================

// ==================================== Outras maneiras de fazer queries no DOM - Aula 01-08
// obter um elemento através do ID
const title = document.getElementById('title')

// obter elementos através do nome da classe
{
  const errors = document.getElementsByClassName('error')
  console.log(errors)
  // Retorna um HTMLCollection (Coleção de HTML), representa uma lista genérica de elementos, similar a uma NodeList, porém com algumas diferenças, como não poder percorrer um forEach nele.
}

// obter elementos através do nome da tag
{
  const paragraphs = document.getElementsByTagName('p')
  console.log(paragraphs)
  // Também retorna um HTMLCollection
}
// =====================================================================================
