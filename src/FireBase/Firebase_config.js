import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAj7mOuN6cJ5nxxQ-tYknkO06ftg7Scjcs",
  authDomain: "todolist-1279f.firebaseapp.com",
  projectId: "todolist-1279f",
  storageBucket: "todolist-1279f.appspot.com",
  messagingSenderId: "899252491459",
  appId: "1:899252491459:web:00dc4e823aab67d1a4be76",
  measurementId: "G-GC7D7G62HG"
})

export const auth = app.auth()
export default app