// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoXxQ-5awgmc3CASF1BjI2VoPu215SYZA",
    authDomain: "jonota-car-services.firebaseapp.com",
    projectId: "jonota-car-services",
    storageBucket: "jonota-car-services.appspot.com",
    messagingSenderId: "455280946374",
    appId: "1:455280946374:web:5b4e2ca0dfd880b2f27bc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;