// ==================================== Introdução a classes - Aula 02-06
{
  const user = {
    name: 'Rickson',
    email: 'ricksonl.berigo@outlook.com',
    login: () => 'O usuário logou!',
    logout: () => 'O usuário deslogou!',
  }

  const user2 = {
    ...user,
    name: 'Paulo Henrique',
    email: 'ph@outlook.com',
  }

  console.log(user, user2)

  class User {
    constructor(name, email) {
      this.name = name
      this.email = email
    }
  }

  const user3 = new User('Rickson', 'ricksonl.berigo@outlook.com')

  console.log(user3)
}

// =====================================================================================

// ==================================== Métodos em classes - Aula 02-07
{
  class User {
    constructor(name, email) {
      this.name = name
      this.email = email
      this.points = 0
    }

    login() {
      console.log(`${this.name} logou na aplicação`)
      return this
    }

    logout() {
      return `${this.name} deslogou da aplicação`
    }

    addPoint() {
      this.points++
      return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
    }
  }

  const user = new User('Rickson Berigo', 'ricksonl.berigo@outlook.com')

  user.login().addPoint()

  console.log(user)
}

// =====================================================================================

// ==================================== Herança em classes - Aula 02-08
class Mammal {
  constructor(species, name, age) {
    this.species = species
    this.name = name
    this.age = age
    this.mammaryGland = true
  }

  incrementAge() {
    this.age++
  }
}

class Lion extends Mammal {
  super(manEater) {
    this.manEater = manEater
  }

  eatZebras(animals) {
    return animals.filter(animal => animal.species !== 'Zebra')
  }
}

const zeca = new Mammal('Zebra', 'zeca', 2)
const pompeu = new Mammal('Gnu', 'Pompeu', 5)
const angus = new Mammal('Cavalo', 'Angus', 3)
const mufasa = new Lion('Leão', 'Mufasa', 7, false)

const animals = [pompeu, angus, zeca]

console.log(mufasa.eatZebras(animals))

// =====================================================================================
