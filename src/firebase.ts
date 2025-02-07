// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1_otl7GCLgzKw6x0i4-PReWfsWaXBlk",
  authDomain: "portfolio-921b3.firebaseapp.com",
  projectId: "portfolio-921b3",
  storageBucket: "portfolio-921b3.firebasestorage.app",
  messagingSenderId: "879678815766",
  appId: "1:879678815766:web:cb0cde4a3d4ab164c3ff37",
  measurementId: "G-2BCH115NTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }