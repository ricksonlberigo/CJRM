// ==================================== Funções construtoras - Aula 03-06
// class Student {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
// }

function Student (name, email) {
    this.name  = name
    this.email = email

    this.login = function () {
        return `${this.name} fez login.`
    }
    this.logout = function () {
        return `${this.name} efetuou logout.`
    }
}

const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@rogermelo.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br')

console.log(gabrielFialho.login(), brenoLemos.login())
console.log(gabrielFialho.logout(), brenoLemos.logout())

// =====================================================================================

// ==================================== Prototypes - Aula 03-07
// =====================================================================================

// ==================================== Herança prototipal - Aula 03-08
// =====================================================================================

// ==================================== Factory functions e composição de objetos - Aula 03-09
// =====================================================================================
