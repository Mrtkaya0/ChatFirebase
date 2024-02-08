// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,  GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClPjcefGYJofYd3H7iP2SGymvuDmHnpC0",
  authDomain: "murat-chat-app-123.firebaseapp.com",
  projectId: "murat-chat-app-123",
  storageBucket: "murat-chat-app-123.appspot.com",
  messagingSenderId: "879423217790",
  appId: "1:879423217790:web:7d8034c6fbbffed47eb82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// konsoıldakş authenitcaion bölümünün referansını alır
export const auth = getAuth(app);

// google sağlayıcısının referansını alma

export const provider = new GoogleAuthProvider();

// veritabanının referansını alır
export const db = getFirestore(app);
