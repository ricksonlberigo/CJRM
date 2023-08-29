// objetos em arrays

let user = {
  name: 'Rickson',
  age: 20,
  email: 'ricksonl.berigo@outlook.com',
  blogPosts: [
    { title: 'Tecnologia', likes: 30 },
    { title: 'Twitter', likes: 50 },
  ],
  login() {
    console.log('Usuário logado')
  },
  logout() {
    console.log('Usuário deslogado')
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  },
}
user.logBlogPosts()

// O objeto Math

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7
console.log(Math.round(area))
// Math.round() arredonda número para cima da forma padrão, caso o número seja igual ou maior que 5 ele ira arredondar para cima, caso seja menor, arredonda para baixo
console.log(Math.floor(area))
// Math.floor() arredonda número sempre para baixo independente se o número é maior ou igual a 5
console.log(Math.ceil(area))
// Math.ceil() arredonda número sempre para cima independente se o número é menor que 5
console.log(Math.trunc(area))
// Math.trunc() remove a parte decimal dele e retorna o número inteiro

// números aleatórios
const randomNumber = Math.random()
// Math.random() gera um número aleatório, por padrão sempre gera um número decimal entre 0 e 1
console.log(randomNumber)

// Caso a gente queira gerar números entre 1 e 100 ou qualquer outro número
console.log(Math.round(randomNumber * 100))

/** Tipos primitivos (armazenado na stack)
 * Numbers
 * Strings
 * Booleans
 * Null
 * Undefined
 * Symbol
 * BigInt
 */

/** Tipos de referência (armazenado no heap)
 * Todos os tipos de objetos
 * Objetos literais
 * Arrays
 * Funções
 * Datas
 * Todos os outros objetos
 */

// Quando criamos algo que é tipo primitivo, armazenamos ela na stack (pilha), esses valores podem ser acessados rapidamente, porém o espaço dentro da stack é limitado.
// Quando criamos algo que é do tipo de referência, estamos armazenando ela no heap (amontoado), tem mais espaços disponíveis, para armazenar algo mais complexo, porém lento.

// Quando criamos um array de frutas, esse array vai ir para a heap, e ao criar uma constante que ira carregar o valor do array que está em heap, ele se torna um pointer (ponteiro).

// valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

// Valores de referência
let userOne = { name: 'Rickson', age: 20 }
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 21

console.log(userOne, userTwo)
