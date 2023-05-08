// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import 'firebase/compat/app'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Xe_xhw7V7QleVnu5EuZEe4-wlCYZy5M",
  authDomain: "js31project.firebaseapp.com",
  projectId: "js31project",
  storageBucket: "js31project.appspot.com",
  messagingSenderId: "898088455525",
  appId: "1:898088455525:web:312bd3a88b5251c2fe658c"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire
