import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlT0_sIGgkqC_zX64C2PgWikZrfgSWM4k",
  authDomain: "challenge-38b56.firebaseapp.com",
  projectId: "challenge-38b56",
  storageBucket: "challenge-38b56.firebasestorage.app",
  messagingSenderId: "176866923387",
  appId: "1:176866923387:web:2afbfd0bc1af6398fba3de",
  measurementId: "G-LMLG8C2R6F"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };