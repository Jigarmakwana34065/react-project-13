// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5FUk2R88SuNdIl_yH4ygcoOY1H1QuZBM",
    authDomain: "authentication-be5b6.firebaseapp.com",
    projectId: "authentication-be5b6",
    storageBucket: "authentication-be5b6.appspot.com",
    messagingSenderId: "548272249597",
    appId: "1:548272249597:web:41b0f1272fa74c1ea0bc94",
    measurementId: "G-QN943E9VJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const google = new GoogleAuthProvider

export const auth = getAuth();