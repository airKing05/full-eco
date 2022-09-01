import firebase, {initializeApp} from 'firebase/compat/app';
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/compat/auth';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeFirestore } from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDBL9VcUMZARxNLMEo1U0JOEhGJJ-kIwD8",
  authDomain: "full-eco.firebaseapp.com",
  projectId: "full-eco",
  storageBucket: "full-eco.appspot.com",
  messagingSenderId: "761286097649",
  appId: "1:761286097649:web:a842d3ef6e187551020750",
  measurementId: "G-DPCJXNFRDW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// setup for google authentication
// export const app = initializeApp(config)
//export const provider = new GoogleAuthProvider();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithGoogle(provider);

export default firebase;