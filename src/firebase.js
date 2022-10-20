// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore, initializeFirestore, collection, getDoc, doc, getDocs, query, orderBy, QuerySnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEDO0humciXdzyfx3Q271I2br_ILdAulU",
  authDomain: "twitter-clone-4ba84.firebaseapp.com",
  projectId: "twitter-clone-4ba84",
  storageBucket: "twitter-clone-4ba84.appspot.com",
  messagingSenderId: "587885714304",
  appId: "1:587885714304:web:6ca6c13ac0a5a5827ebf65",
  measurementId: "G-NZ2EHFFQ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);

  

export default database;
