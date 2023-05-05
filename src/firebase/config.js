import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiPvK3vLool4_6sMFoA3B_JqJ9ey8pIno",
  authDomain: "react-journal-app-b29ee.firebaseapp.com",
  projectId: "react-journal-app-b29ee",
  storageBucket: "react-journal-app-b29ee.appspot.com",
  messagingSenderId: "101805498695",
  appId: "1:101805498695:web:39f166ecf1521bf189ac62"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );