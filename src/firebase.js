// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcFRAK-gZGr3HywYjRNrqLtKZ2Ub2yNds",
  authDomain: "fir-cab43.firebaseapp.com",
  projectId: "fir-cab43",
  storageBucket: "fir-cab43.appspot.com",
  messagingSenderId: "377788020608",
  appId: "1:377788020608:web:7affc48dec34c589b43365",
  measurementId: "G-3610EWS85V"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  const db = firebaseApp.firestore()

  export {auth, provider}
  export default db