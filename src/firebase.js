// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNIMKPushvhTI6LGcxoNEFx4Lr4glPD7M",
  authDomain: "realtor-87a08.firebaseapp.com",
  projectId: "realtor-87a08",
  storageBucket: "realtor-87a08.appspot.com",
  messagingSenderId: "8872351883",
  appId: "1:8872351883:web:65b304b7b4ffc9bc5a5c8e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();