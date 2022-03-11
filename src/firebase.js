import firebase from "firebase";
import "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAjbVY9yZ8NJ6rQplnLaeX1wBmfZdecDQ",
  authDomain: "twitter-clone-d2596.firebaseapp.com",
  projectId: "twitter-clone-d2596",
  storageBucket: "twitter-clone-d2596.appspot.com",
  messagingSenderId: "303034467549",
  appId: "1:303034467549:web:fe0306e7d1567c2a4d0734",
  measurementId: "G-FX2N9WCMDE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const db = firebase.firestore();
const db = firebaseApp.firestore();

export default db;
