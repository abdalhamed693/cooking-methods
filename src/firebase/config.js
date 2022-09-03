import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD2YuNXZwD-EDNv0Z8dVi-1zAXHtRLazb0",
    authDomain: "cooking-sharing.firebaseapp.com",
    projectId: "cooking-sharing",
    storageBucket: "cooking-sharing.appspot.com",
    messagingSenderId: "284581546104",
    appId: "1:284581546104:web:a4095f50a855791cd9c58d"
  };
  firebase.initializeApp(firebaseConfig)
    const projectFireStore = firebase.firestore()

    export {projectFireStore}