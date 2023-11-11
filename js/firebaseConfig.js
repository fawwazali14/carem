// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM42jOaimC5T88wrbFolCjZX5nUxViico",
  authDomain: "carematch-cfda9.firebaseapp.com",
  projectId: "carematch-cfda9",
  storageBucket: "carematch-cfda9.appspot.com",
  messagingSenderId: "663229903807",
  appId: "1:663229903807:web:402e1a577464a75545670a",
  measurementId: "G-KNT48YP0E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);