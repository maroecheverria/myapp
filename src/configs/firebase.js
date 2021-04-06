import firebase from "firebase/app";
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyArVzfT8jUsANzieUMZv8GiyQL1gEEYIJg",
    authDomain: "mariano-echeverria.firebaseapp.com",
    projectId: "mariano-echeverria",
    storageBucket: "mariano-echeverria.appspot.com",
    messagingSenderId: "633228228039",
    appId: "1:633228228039:web:4147df87e25b4fd9c315e2"
  });

  export function getFirebase() {
      return app;
  }

  export function getFirestore() {
      return firebase.firestore(app);
  }