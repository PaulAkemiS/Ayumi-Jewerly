// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5TllkoK2ns5uboTVMF043EfXGmLZbVMI",
  authDomain: "ayumi-jewelry.firebaseapp.com",
  projectId: "ayumi-jewelry",
  storageBucket: "ayumi-jewelry.appspot.com",
  messagingSenderId: "939786869194",
  appId: "1:939786869194:web:1cc456f59cd95cd9f15733",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
