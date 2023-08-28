// Criando um objeto literal
let user = {
  name: 'Rickson Lucas',
  age: 20,
  email: 'ricksonl.berigo@outlook.com',
  city: 'Iturama',
  blogPosts: ['Tecnologias', 'Como se tornar um dev de sucesso'],
  // Adicionando métodos ao nosso objeto user
  login: function () {
    console.log('Usuário logado')
  },
  logout: function () {
    console.log('Usuário deslogado')
  },
}
// console.log(user.age)
// console.log(typeof user)

// Adicionando métodos
user.login()
user.logout()
