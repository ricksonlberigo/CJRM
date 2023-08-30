// ==================================== Adicionando e modificando conteúdo em uma página - Aula 02-02
{
  const paragraph = document.querySelector('p')
  // innerText, pega o conteúdo de texto que fica dentro do elemento selecionado, aceita passar outro conteúdo, concatenar, excluir o texto de dentro.
  // paragraph.innerText = 'Texto inserido' // Substituí o valor do texto caso haja algum, ou adiciona texto em elemento vazio.
  // paragraph.innerText += 'Texto inserido' // Adiciona o valor do texto no elemento selecionado, caso tenha outro texto, vai virar um texto só.

  const paragraphs = document.querySelectorAll('p')
  paragraphs.forEach((paragraph, index) => {
    // paragraph.innerText += ` Novo texto ${index + 1}`
    // Como o index sempre inicia com 0, ao somar com 1 ele vai começar a contar a cada interação com 1.
  })

  const div = document.querySelector('.content')
  // innerHTML, pega o conteúdo HTML que tem dentro do elemento selecionado.
  // Caso haja algum elemento HTML dentro da div, vai ser substituído ou caso não tenha nada, vai ser acrescentado
  // div.innerHTML = '<h2>Novo h2</h2>'
  // Caso seja passado o += o que via ocorrer é que dentro do elemento selecionado irá conter o conteúdo HTML de antes e vai ser adicionado um novo conteúdo HTML.
  // div.innerHTML += '<h2>Novo h2</h2>'

  const people = ['Rickson', 'Kamilly', 'Diego']
  people.forEach(person => {
    div.innerHTML += `<p>${person}</p>`
  })

  // Propriedades innerHTML e innerText, são getters e setters, podemos obter o conteúdo e alterar o conteúdo
  // Podemos pegar o elemento com o innerText e podemos alterar o valor de innerText
}
// =====================================================================================

// ==================================== Obtendo e setando atributos - Aula 02-03
{
  const link = document.querySelector('a')
  // console.log(link.getAttribute('href'))
  // getAttribute pega o valor passado como argumento da função e retorna ele

  link.setAttribute('href', 'https://www.youtube.com/rogermelo')
  // setAttribute altera o valor passado como o argumento da função, primeiro argumento o que queremos alterar, segundo argumento o valor que vai ser implementado na mudança

  link.innerText = 'Website do Roger Melo'

  const paragraph = document.querySelector('p')
  console.log(paragraph.getAttribute('class'))
  // paragraph.setAttribute('class', 'success')
  console.log(paragraph.getAttribute('class'))
  // Caso o atributo não exista já no elemento selecionado, o JavaScript irá criar ele com o setAttribute
  // paragraph.setAttribute('style', 'color: green;')
}
// =====================================================================================

// ==================================== Modificando estilos CSS (inline) - Aula 02-04
{
  const title = document.querySelector('h1')
  // Quando utilizamos o método setAttribute para adicionar estilos a um element, a gente sobrescreve os estilos inline anteriores e isso é um ponto negativo.
  // title.setAttribute('style', 'margin: 50px;')

  // Ao utilizar o objeto style, podemos atribuir mais estilos para o nosso elemento selecionado, para fazermos isso, precisamos passar o elemento selecionado, ponto, objeto style, ponto e o atributo que queiramos acrescentar e o seu valor
  title.style.margin = '50px'
  // Caso queiramos substituir um valor por outro, basta fazer isso, pois o objeto style sobrescreve o valor caso seja repetido.
  title.style.color = 'pink'
  // Propriedades CSS que existe o '-', ao invés de usar o hífen devemos utilizar o camelCase
  title.style.fontSize = '32px'
  // E é assim que a gente remove estilos em um elemento
  title.style.margin = ''
}
// =====================================================================================

// ==================================== Obtendo, adicionando, removendo e alternando classes CSS - Aula 02-05
{
  const paragraph = document.querySelector('p')
  // console.log(paragraph.classList) Tática para listar todas as classes que um elemento possui
  // paragraph.classList.add('error') // Adiciona a classe que passamos como argumento, no elemento que a gente selecionou
  // paragraph.classList.remove('error') // Remove a classe que passamos como argumento, no elemento que a gente selecionou

  const paragraphs = document.querySelectorAll('p')
  paragraphs.forEach(paragraph => {
    const thisWordIsIncluded = paragraph.innerText
    // textContent - Ela vai obter todo o texto que o elemento contém, independente se o texto é visível ou não.
    // innerText - Ela vai obter o texto visível que o elemento contém, caso exista um elemento com display none com um texto, não vai aparecer, ao utilizar o innerText.
    const classSuccess = 'success'
    const classError = 'error'
    if (thisWordIsIncluded.includes(classSuccess)) {
      paragraph.classList.add(classSuccess)
    }
    if (thisWordIsIncluded.includes(classError)) {
      paragraph.classList.add(classError)
    }
  })

  const title = document.querySelector('h1')
  title.classList.toggle('test') // o toggle adiciona a classe passada como argumento caso o elemento selecionado não a possua, e caso o elemento a possua ele retira a classe.
}
// =====================================================================================
