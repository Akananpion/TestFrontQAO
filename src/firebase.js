// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRgbiSAjt-1DPWdOpyArmZxfcoRAYKxY",
  authDomain: "test-front-end-qa.firebaseapp.com",
  projectId: "test-front-end-qa",
  storageBucket: "test-front-end-qa.appspot.com",
  messagingSenderId: "407924545615",
  appId: "1:407924545615:web:9200b50c5a3df1fdb8f23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialisation du service d'authentification Firebase
const auth = getAuth(app);

export { auth };