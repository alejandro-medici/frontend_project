// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyD_qHBDVsGIu79ryuekEUB9q31s_XJ-9Wg",
  authDomain: "front-end-22801.firebaseapp.com",
  projectId: "front-end-22801",
  storageBucket: "front-end-22801.appspot.com",
  messagingSenderId: "884002254420",
  appId: "1:884002254420:web:ad9c8ce642eb33ed1647c1"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBbH3xixzya2HF7QcxzSuf3g4-EBE5mAR4",
  authDomain: "front-end-82c91.firebaseapp.com",
  projectId: "front-end-82c91",
  storageBucket: "front-end-82c91.appspot.com",
  messagingSenderId: "895633365015",
  appId: "1:895633365015:web:2286c154584e3934266452",
  measurementId: "G-XZVM8LEY65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)