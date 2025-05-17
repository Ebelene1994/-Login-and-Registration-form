  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCkHd53qPVXCfgpEgJqLp_FVyMzXXMnk7o",
    authDomain: "cofedform.firebaseapp.com",
    projectId: "cofedform",
    storageBucket: "cofedform.firebasestorage.app",
    messagingSenderId: "570627699131",
    appId: "1:570627699131:web:2166cecbea43ec9470149e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const database = getDatabase(app)
