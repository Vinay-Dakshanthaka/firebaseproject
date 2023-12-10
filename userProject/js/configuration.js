
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth,signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc,getDocs,query,where } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyChWywhZxIJUerS84xKSL6nsoxkNEVY0qI",
  authDomain: "userproject-3299e.firebaseapp.com",
  projectId: "userproject-3299e",
  storageBucket: "userproject-3299e.appspot.com",
  messagingSenderId: "1042360542504",
  appId: "1:1042360542504:web:345d3a741dd721d88edc1d",
  measurementId: "G-1NRBBXZ8LE"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()

export {firebaseConfig,createUserWithEmailAndPassword,getAuth,app,db,addDoc,getDocs,collection,signInWithEmailAndPassword,query, where,signOut }



