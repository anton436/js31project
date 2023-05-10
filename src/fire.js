// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkn2OfuzaSWyv7Se57lGOdPw_jOA2LeiA",
  authDomain: "js31project-80896.firebaseapp.com",
  projectId: "js31project-80896",
  storageBucket: "js31project-80896.appspot.com",
  messagingSenderId: "714367230941",
  appId: "1:714367230941:web:b85945313fd9c0078a8c34",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
