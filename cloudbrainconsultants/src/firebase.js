import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwFdV7rLWp7FHAgXxSDNWxNcmcr-xTeNo",
  authDomain: "form-69235.firebaseapp.com",
  projectId: "form-69235",
  storageBucket: "form-69235.appspot.com",
  messagingSenderId: "133657771407",
  appId: "1:133657771407:web:b05d59a52b2c2514089ffa",
  measurementId: "G-1P5RW4YGBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
