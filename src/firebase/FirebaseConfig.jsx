// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUAC1MMW8cQHjzBD6K5X88fB47kYSLbq0",
  authDomain: "zohaibai.firebaseapp.com",
  projectId: "zohaibai",
  storageBucket: "zohaibai.appspot.com",
  messagingSenderId: "120366443429",
  appId: "1:120366443429:web:0eeb22645d659c292e964c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireDb = getFirestore(app);
const storage = getStorage(app);

export { auth, fireDb, storage };
