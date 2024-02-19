
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC2fvrT37jhNY2X5yMlDGyq5Vqjj6xFauQ",
  authDomain: "jessandcode-c8517.firebaseapp.com",
  projectId: "jessandcode-c8517",
  storageBucket: "jessandcode-c8517.appspot.com",
  messagingSenderId: "941481612796",
  appId: "1:941481612796:web:c8d219668760355c12ce79",
  measurementId: "G-P4VFENQ09M"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)