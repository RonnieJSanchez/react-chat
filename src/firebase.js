// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAncOnTF6BKyOwew27VdsQ4YG_ejL5YUgM",
  authDomain: "react-chat-c42eb.firebaseapp.com",
  projectId: "react-chat-c42eb",
  storageBucket: "react-chat-c42eb.appspot.com",
  messagingSenderId: "664721856323",
  appId: "1:664721856323:web:4058af046fd0a43caa01f6",
  measurementId: "G-YP304D35R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
