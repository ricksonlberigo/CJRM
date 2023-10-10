// ==================================== Funções construtoras - Aula 03-06
{
  // class Student {
  //     constructor(name, email) {
  //         this.name = name
  //         this.email = email
  //     }
  // }
  //   function Student(name, email) {
  //     this.name = name
  //     this.email = email
  //     this.login = function () {
  //       return `${this.name} fez login.`
  //     }
  //     this.logout = function () {
  //       return `${this.name} efetuou logout.`
  //     }
  //   }
  //   const gabrielFialho = new Student(
  //     'Gabriel Fialho',
  //     'gabrielf@rogermelo.com.br',
  //   )
  //   const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')
  //   console.log(gabrielFialho.login(), brenoLemos.login())
  //   console.log(gabrielFialho.logout(), brenoLemos.logout())
}

// =====================================================================================

// ==================================== Prototypes - Aula 03-07
{
  //   function Student(name, email) {
  //     this.name = name
  //     this.email = email
  //   }
  //   Student.prototype.login = function login() {
  //     return `${this.name} fez login`
  //   }
  //   Student.prototype.comment = function comment() {
  //     return `${this.name} comentou`
  //   }
  //   function formatToDatabase(aString) {
  //     return aString.toUpperCase().replaceAll(' ', '_')
  //   }
  // class Student {
  //   constructor(name, email) {
  //     this.name = name
  //     this.email = email
  //   }
  //   comment() {
  //     return `${this.name} comentou`
  //   }
  //   static formatToDatabase(aString) {
  //     return aString.toUpperCase().replaceAll(' ', '_')
  //   }
  // }
  //   const gabrielFialho = new Student(
  //     'Gabriel Fialho',
  //     'gabrielf@rogermelo.com.br',
  //   )
  //   const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')
  //   console.log(gabrielFialho.comment(), brenoLemos.comment())
  //   console.log(gabrielFialho.comment === brenoLemos.comment)
  //   console.log(gabrielFialho, brenoLemos)
  //   console.log(Student.formatToDatabase('String para o banco de dados'))
  //   console.dir(Student) // Visualiza todos os elementos da Classe, seja elas atributos, métodos e métodos estáticos
  //   console.log(Student.prototype.login.name)
  //   console.log(Student.prototype.comment.name)
}

// =====================================================================================

// ==================================== Herança prototipal - Aula 03-08
{
  //   function Student(name, email) {
  //     this.name = name
  //     this.email = email
  //   }
  //   Student.prototype.login = function login() {
  //     return `${this.name} fez login`
  //   }
  //   Student.prototype.comment = function comment() {
  //     return `${this.name} comentou`
  //   }
  //   function TeacherAssistant(name, email, scheduleWeekPosts) {
  //     Student.call(this, name, email)
  //     this.scheduleWeekPosts = scheduleWeekPosts
  //   }
  //   TeacherAssistant.prototype = Object.create(Student.prototype)
  //   TeacherAssistant.prototype.giveBadges = function giveBadges({ name }) {
  //     return `${this.name} deu uma medalha pra ${name}`
  //   }
  //   const gabrielFialho = new Student(
  //     'Gabriel Fialho',
  //     'gabrielf@rogermelo.com.br',
  //   )
  // const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')
  //   const arthurSouze = new TeacherAssistant(
  //     'Arthur Souza',
  //     'arthursouza@rogermelo.com.br',
  //     false,
  //   )
  //   console.log(gabrielFialho, arthurSouze)
  //   console.log(arthurSouze.giveBadges(gabrielFialho))
  //   console.log(arthurSouze.login())
  //   console.log(arthurSouze.login === gabrielFialho.login)
}

// =====================================================================================

// ==================================== Factory functions e composição de objetos - Aula 03-09
// Class
class User {
  #counter = 0

  constructor(name, email) {
    this.name = name
    this.email = email
  }

  increment() {
    return ++this.#counter
  }
}

// Factory Function
const createUser = (name, email) => {
  let counter = 0

  return {
    name,
    email,
    incrementCounter: () => ++counter,
  }
}

const userClass = new User('Rickson', 'ricksonl.berigo@gmail.com')
const userFunction = createUser('Rickson', 'ricksonl.berigo@gmail.com')
const userFunction2 = createUser('Rickson Lucas', 'ricksonl.berigo@outlook.com')

console.log(userClass, userFunction)
console.log(userClass.increment())
console.log(userClass.increment())
console.log(userFunction.incrementCounter())
console.log(userFunction.incrementCounter())
console.log(userFunction2.incrementCounter())
console.log(userFunction2.incrementCounter())

// =====================================================================================
