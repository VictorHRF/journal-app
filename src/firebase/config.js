// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLxYNN08DCu-keqO-eHl-WJAZ4x_jlGI8",
  authDomain: "react-curso-e0bb7.firebaseapp.com",
  projectId: "react-curso-e0bb7",
  storageBucket: "react-curso-e0bb7.appspot.com",
  messagingSenderId: "245850469994",
  appId: "1:245850469994:web:810e0764c2df01e8e2fc13"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );