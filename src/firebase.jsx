import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB6hOYxsnmzaYSo4Z_fceS2DU3PC7jZB8",
  authDomain: "netflix-clone-react-fe4cc.firebaseapp.com",
  projectId: "netflix-clone-react-fe4cc",
  storageBucket: "netflix-clone-react-fe4cc.appspot.com",
  messagingSenderId: "680656562002",
  appId: "1:680656562002:web:c6db7e9d602f0f89e83c8b",
  measurementId: "G-5G2T1P2B92",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
