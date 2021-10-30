// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5qbi4oeZjhiymh7wQMOdCEbkUV7M83rc",
  authDomain: "carpool-db0ae.firebaseapp.com",
  projectId: "carpool-db0ae",
  storageBucket: "carpool-db0ae.appspot.com",
  messagingSenderId: "106745544381",
  appId: "1:106745544381:web:eb97ee1d688b5a12cdc1d4",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
