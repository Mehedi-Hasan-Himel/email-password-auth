// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsivZGkpN08HlVE8vFTh4vKoHXW9gTo8E",
  authDomain: "email-password-auth-67587.firebaseapp.com",
  projectId: "email-password-auth-67587",
  storageBucket: "email-password-auth-67587.appspot.com",
  messagingSenderId: "222949727627",
  appId: "1:222949727627:web:73605e06ea67108c46638e",
  measurementId: "G-H1JVLQ38KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
