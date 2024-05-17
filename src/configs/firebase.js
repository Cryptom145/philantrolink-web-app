// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqIIWPyInMt7KRPcBt0VdnlvlXTGaRt-I",
  authDomain: "philantrolinkapp.firebaseapp.com",
  projectId: "philantrolinkapp",
  storageBucket: "philantrolinkapp.appspot.com",
  messagingSenderId: "1022393505539",
  appId: "1:1022393505539:web:a8b0772f8c74f1eed2fb36",
  measurementId: "G-668D26FYFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);