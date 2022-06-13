// Import the functions you need from the SDKs you need
//to use firebase app

import firebase from 'firebase/compat/app'; //v9

//to use auth

import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: "AIzaSyCYK4Hrr1PZs-pjb6LDziqFyqb95ckvU9Q",
  authDomain: "hackathon-code-exp.firebaseapp.com",
  projectId: "hackathon-code-exp",
  storageBucket: "hackathon-code-exp.appspot.com",
  messagingSenderId: "363519501675",
  appId: "1:363519501675:web:17140154d73b41fd6bd82e"
});


export const auth = firebase.auth(app);
export const db = getFirestore(app);


export default app; 