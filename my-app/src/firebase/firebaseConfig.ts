// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMuhI3nVgKH49wHsSy43LmYL3jBHSRSRk",
  authDomain: "onfaitquoi-c9bc8.firebaseapp.com",
  projectId: "onfaitquoi-c9bc8",
  storageBucket: "onfaitquoi-c9bc8.firebasestorage.app",
  messagingSenderId: "567038945132",
  appId: "1:567038945132:web:1d73ff2d6603a7e5d97549",
  measurementId: "G-52FXYP5X8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);