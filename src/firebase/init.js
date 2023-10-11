import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIv30uhbB5jramYIo_F8SjQslNvy82np8",
  authDomain: "dyj-distribuidora-b22ff.firebaseapp.com",
  projectId: "dyj-distribuidora-b22ff",
  storageBucket: "dyj-distribuidora-b22ff.appspot.com",
  messagingSenderId: "339965685081",
  appId: "1:339965685081:web:77743e9b0e8f284a9eb048"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
