// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3a5wUkBIjxKfU0jyi7G0TPTgFONZNRkc",
  authDomain: "communer-c7b6b.firebaseapp.com",
  projectId: "communer-c7b6b",
  storageBucket: "communer-c7b6b.appspot.com",
  messagingSenderId: "1090616358269",
  appId: "1:1090616358269:web:c377ec05b3bbc585d1c814",
  measurementId: "G-8QRZDJMTWJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();
const db = getFirestore(app);

export { app, auth, provider, storage, db };
