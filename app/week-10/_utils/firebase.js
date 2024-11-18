import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC6bRXM0hrotw4Ud-NTbFLaH_c_O32r6tE",
  authDomain: "cprg306-assignments-a7638.firebaseapp.com",
  projectId: "cprg306-assignments-a7638",
  storageBucket: "cprg306-assignments-a7638.firebasestorage.app",
  messagingSenderId: "108754865552",
  appId: "1:108754865552:web:e3c60df949eed5fdb43715"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };