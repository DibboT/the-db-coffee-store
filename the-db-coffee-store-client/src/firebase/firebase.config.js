// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBunCFM5uZSV0OLVe5Oblf8FHDXtlzJG04",
  authDomain: "coffee-store-f2068.firebaseapp.com",
  projectId: "coffee-store-f2068",
  storageBucket: "coffee-store-f2068.appspot.com",
  messagingSenderId: "794496657650",
  appId: "1:794496657650:web:6a96df87de05b7f9b9c86b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;