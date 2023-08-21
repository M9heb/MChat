// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBA9RZ_2OU0pBGRXRCCW_gbozioGD3Zrd8",
  authDomain: "m9heb-mchat.firebaseapp.com",
  projectId: "m9heb-mchat",
  storageBucket: "m9heb-mchat.appspot.com",
  messagingSenderId: "897839836603",
  appId: "1:897839836603:web:e79f58a35e6f931ea2a89e",
  measurementId: "G-3CNTGYE2R8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
