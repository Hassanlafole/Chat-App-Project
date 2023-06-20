
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-4RSDXa0cvJmzpLfBUltKIsjlpwEgM2g",
  authDomain: "chat-9a5c7.firebaseapp.com",
  projectId: "chat-9a5c7",
  storageBucket: "chat-9a5c7.appspot.com",
  messagingSenderId: "464587481317",
  appId: "1:464587481317:web:7f33b22c473e085c14f40c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();