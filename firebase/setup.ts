// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_W8Aawp2jTyiUJHsMvfhQFXrHgxXVUq0",
    authDomain: "zackhu-portfolio.firebaseapp.com",
    projectId: "zackhu-portfolio",
    storageBucket: "zackhu-portfolio.appspot.com",
    messagingSenderId: "12865907158",
    appId: "1:12865907158:web:b692ca30aac5305bc45c77",
    measurementId: "G-5884TPNGJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
