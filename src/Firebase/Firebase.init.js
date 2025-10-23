// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWl6ez26KtcoBoPFzCe-Xr6zEvv38C0iM",
  authDomain: "a-local-kids-toy-store.firebaseapp.com",
  projectId: "a-local-kids-toy-store",
  storageBucket: "a-local-kids-toy-store.firebasestorage.app",
  messagingSenderId: "624132138869",
  appId: "1:624132138869:web:66e03e286f199c82a2553c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;