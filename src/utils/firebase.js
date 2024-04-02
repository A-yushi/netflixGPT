// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuddjAW8rc72uQJsFYstSnJ6Xms0iwZo4",
  authDomain: "netflixgpt-6786e.firebaseapp.com",
  projectId: "netflixgpt-6786e",
  storageBucket: "netflixgpt-6786e.appspot.com",
  messagingSenderId: "214657352308",
  appId: "1:214657352308:web:b0965eb41b20aee1b50721",
  measurementId: "G-NK2GLB1SBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();