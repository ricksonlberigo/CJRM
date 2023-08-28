// Variáveis e escopo de bloco
const age = 31

if (true) {
  const age = 41
  let name = 'Rickson'

  console.log(`Dentro do 1 bloco de código: ${age} ${name}`)

  if (true) {
    const age = 51
    console.log(`Dentro do 2 bloco de código: ${age} `)
  }
}

console.log(`Fora do bloco de código: ${age} ${name}`)

// A palavra-chave this
let user = {
  name: 'Rickson Lucas',
  age: 20,
  email: 'ricksonl.berigo@outlook.com',
  city: 'Iturama',
  blogPosts: ['Tecnologias', 'Como se tornar um dev de sucesso'],
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  },
  logBlogPosts() {
    console.log(`${this.name} escreveu os seguintes posts.`)

    this.blogPosts.forEach(post => {
      console.log(post)
    })
  },
}

user.logBlogPosts()

// this é o objeto de contexto, ele representa o contexto no qual o código atual está sendo executado, e dependendo de onde ou como a gente usa o this, o valor dele irá mudar
