// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn44-5zPUS25ypeVFa66aLPiuZy7hr1aY",
  authDomain: "election-393b3.firebaseapp.com",
  projectId: "election-393b3",
  storageBucket: "election-393b3.appspot.com",
  messagingSenderId: "789720197405",
  appId: "1:789720197405:web:3e859a5e5b6a5f9868d9f4",
  measurementId: "G-DF3Y934R5E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);
