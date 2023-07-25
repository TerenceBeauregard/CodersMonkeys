// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBakXq_ewg2EKNQA4KQgl09sdKCqiCrH1U",
  authDomain: "codersmonkeys.firebaseapp.com",
  projectId: "codersmonkeys",
  storageBucket: "codersmonkeys.appspot.com",
  messagingSenderId: "114028945450",
  appId: "1:114028945450:web:a84c08f34f619c6564a353"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
