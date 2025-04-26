// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // import auth
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOybEgXfQX_tJx5dqg_OGzcrPcGBKq2gg",
  authDomain: "p2p-student-platform.firebaseapp.com",
  projectId: "p2p-student-platform",
  storageBucket: "p2p-student-platform.firebasestorage.app",
  messagingSenderId: "23452791627",
  appId: "1:23452791627:web:de87fcbd0ba47949b9aece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // get the auth service

export { auth };
