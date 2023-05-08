// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKQk3J4L6JGEtNidUqgJ8OAG3T96sXVIA",
  authDomain: "js31project-69d46.firebaseapp.com",
  projectId: "js31project-69d46",
  storageBucket: "js31project-69d46.appspot.com",
  messagingSenderId: "414624369910",
  appId: "1:414624369910:web:5780d6ae862eba85c870d7",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
