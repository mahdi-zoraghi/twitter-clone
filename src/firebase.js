import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqXULrHz51fNNQ4VTH5ElIgnepaLNs2SU",
  authDomain: "twitter-clone-8173a.firebaseapp.com",
  projectId: "twitter-clone-8173a",
  storageBucket: "twitter-clone-8173a.appspot.com",
  messagingSenderId: "824276540638",
  appId: "1:824276540638:web:6c46e6011f6c1ad72e764f",
  measurementId: "G-DLHTT3F3E1",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
