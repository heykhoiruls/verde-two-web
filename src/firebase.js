// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB47F58YlX7HFo3yuHWZAwigEZPY6rx25w",
  authDomain: "verde-two-web.firebaseapp.com",
  projectId: "verde-two-web",
  storageBucket: "verde-two-web.appspot.com",
  messagingSenderId: "105248972085",
  appId: "1:105248972085:web:863629edc9948809d5407c",
  measurementId: "G-5D6L29N2WJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
