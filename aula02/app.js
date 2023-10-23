// ==================================== Introdução a regras de segurança no Firestore - Aula 02-07
/*
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
const collectionGames = collection(database, 'games')

// Usando forEach no objeto
// getDocs(collection(database, 'games'))
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => console.log(doc.data()))
//   })
//   .catch(console.log)

// Usando qualquer método de Array, pois estamos acessando um array e não um objeto igual ao código comentado acima.
getDocs(collectionGames)
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
*/
// =====================================================================================

// ==================================== Salvando informações no Firestore - Aula 02-08
/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
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
const collectionGames = collection(database, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')

// Usando forEach no objeto
// getDocs(collection(database, 'games'))
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => console.log(doc.data()))
//   })
//   .catch(console.log)

// Usando qualquer método de Array, pois estamos acessando um array e não um objeto igual ao código comentado acima.
getDocs(collectionGames)
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

formAddGame.addEventListener('submit', e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then(doc => console.log('Document criado com o ID', doc.id))
    .catch(console.log)
})
*/
// =====================================================================================

// ==================================== Deletando informações no Firestore - Aula 02-09
/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
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
const collectionGames = collection(database, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')

// Usando qualquer método de Array, pois estamos acessando um array e não um objeto igual ao código comentado acima.
getDocs(collectionGames)
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>

        <button data-remove="${
          doc.id
        }" class="btn btn-danger btn-sm">Remover</button>
      </li>`

      return acc
    }, '')
    gamesList.innerHTML = gamesLis
  })
  .catch(console.log)

formAddGame.addEventListener('submit', e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then(doc => console.log('Document criado com o ID', doc.id))
    .catch(console.log)
})

gamesList.addEventListener('click', e => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(database, 'games', idRemoveButton))
      .then(() => {
        const game = document.querySelector(`[data-id="${idRemoveButton}"]`)
        game.remove()
      })
      .catch(console.log)
  }
})
*/
// =====================================================================================

// ==================================== Modificando informações no Firestore - Aula 02-10
/*
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  setDoc,
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
const collectionGames = collection(database, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')

// Usando qualquer método de Array, pois estamos acessando um array e não um objeto igual ao código comentado acima.
getDocs(collectionGames)
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          <li>Adicionado no banco em ${createdAt.toDate()}</li>
        </ul>

        <button data-remove="${
          doc.id
        }" class="btn btn-danger btn-sm">Remover</button>
      </li>`

      return acc
    }, '')
    gamesList.innerHTML = gamesLis
  })
  .catch(console.log)

formAddGame.addEventListener('submit', e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then(doc => console.log('Document criado com o ID', doc.id))
    .catch(console.log)
})

gamesList.addEventListener('click', e => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(database, 'games', idRemoveButton))
      .then(() => {
        const game = document.querySelector(`[data-id="${idRemoveButton}"]`)
        game.remove()
      })
      .catch(console.log)
  }
})

const residentEvilRef = doc(database, 'games', 're')

setDoc(
  residentEvilRef,
  {
    developedBy: 'Nintendo',
  },
  { merge: true },
)
  .then(() => console.log('Document atualizado'))
  .catch(console.log)
  */
// =====================================================================================

// ==================================== Listeners em tempo real - Aula 02-11
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
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
const collectionGames = collection(database, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const buttonUnsub = document.querySelector('[data-js="unsub"]')

const unsubscribe = onSnapshot(collectionGames, querySnapshot => {
  console.log('callback do onSnapshot executado')

  if (!querySnapshot.metadata.hasPendingWrites) {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, developedBy, createdAt } = doc.data()

      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>
  
        <ul>
          <li>Desenvolvido por ${developedBy}</li>
          ${
            createdAt
              ? `<li>Adicionado no banco em ${createdAt.toDate()}</li>`
              : ''
          }
        </ul>
  
        <button data-remove="${
          doc.id
        }" class="btn btn-danger btn-sm">Remover</button>
      </li>`

      return acc
    }, '')
    gamesList.innerHTML = gamesLis
    console.log('Manipulação do DOM executada')
  }
})

formAddGame.addEventListener('submit', e => {
  e.preventDefault()

  addDoc(collectionGames, {
    title: e.target.title.value,
    developedBy: e.target.developer.value,
    createdAt: serverTimestamp(),
  })
    .then(doc => console.log('Document criado com o ID', doc.id))
    .catch(console.log)
})

gamesList.addEventListener('click', e => {
  const idRemoveButton = e.target.dataset.remove

  if (idRemoveButton) {
    deleteDoc(doc(database, 'games', idRemoveButton))
      .then(() => console.log('Game removido'))
      .catch(console.log)
  }
})

buttonUnsub.addEventListener('click', unsubscribe)

/*
Utilizamos o setDoc, em um evento de form de atualização de dados
const residentEvilRef = doc(database, 'games', 're')
setDoc(
  residentEvilRef,
  {
    developedBy: 'Nintendo',
  },
  { merge: true },
)
  .then(() => console.log('Document atualizado'))
  .catch(console.log)
*/
// =====================================================================================
