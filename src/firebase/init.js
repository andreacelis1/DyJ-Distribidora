import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCcwZFevNtsTyoFbSPiypB5Z4QGHzYl_r0",
  authDomain: "dyj-distribuidora.firebaseapp.com",
  projectId: "dyj-distribuidora",
  storageBucket: "dyj-distribuidora.appspot.com",
  messagingSenderId: "927143118626",
  appId: "1:927143118626:web:626b731428b13d453d077b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db