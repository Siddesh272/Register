// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK1fGXrxvkLNI2cR-OU6w2tmXdTFiHomk",
  authDomain: "registeration-form-f026f.firebaseapp.com",
  databaseURL: "https://registeration-form-f026f-default-rtdb.firebaseio.com",
  projectId: "registeration-form-f026f",
  storageBucket: "registeration-form-f026f.appspot.com",
  messagingSenderId: "382112518783",
  appId: "1:382112518783:web:d0e37b6042b7d990fae54a",
  measurementId: "G-4RCFESXQB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);