// ==================================== Introdução ao Firebase - Aula 01-10
// Tipos de Bancos
// SQL (Structured Query Language) - Linguagem de consulta estruturada
// NoSQL - Bancos de Dados não relacionados
// Firebase é um banco não relacionado
// =====================================================================================

// ==================================== Conectando o Firestore - Aula 01-11
// =====================================================================================

// ==================================== Conectando o Front-end ao Firebase - Aula 01-12
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: 'AIzaSyAI33CjXrxmKEBmLFjfpiWYpw3yEEI1-BU',
  authDomain: 'testing-firebase-8dcba.firebaseapp.com',
  projectId: 'testing-firebase-8dcba',
  storageBucket: 'testing-firebase-8dcba.appspot.com',
  messagingSenderId: '712416479476',
  appId: '1:712416479476:web:35e2dac246a798055bb6a1',
  measurementId: 'G-H58HVPVQ60',
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

// Usando forEach no objeto
// getDocs(collection(database, 'games'))
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => console.log(doc.data()))
//   })
//   .catch(console.log)

// Usando qualquer método de Array, pois estamos acessando um array e não um objeto igual ao código comentado acima.
getDocs(collection(database, 'games'))
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      acc += `<li>
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>
      </li>`

      return acc
    }, '')

    const gamesList = document.querySelector('[data-js="games-list"]')
    gamesList.innerHTML = gamesLis
  })
  .catch(console.log)
// =====================================================================================

// ==================================== Lendo dados do Firestore - Aula 01-13
// =====================================================================================
