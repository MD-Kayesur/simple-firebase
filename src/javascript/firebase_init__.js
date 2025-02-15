// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWa5cgEwNnYceeJy8nRXXqTZ2dn-RBMQ",
  authDomain: "simple-firebase-91268.firebaseapp.com",
  projectId: "simple-firebase-91268",
  storageBucket: "simple-firebase-91268.firebasestorage.app",
  messagingSenderId: "91916904471",
  appId: "1:91916904471:web:a24e92a955c278a2441452"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export  const auth = getAuth(app);