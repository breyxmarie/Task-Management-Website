import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRsEAvfCUPeg86aTK0B1x-4dcLUb9SAP4",
  authDomain: "task-database-13294.firebaseapp.com",
  projectId: "task-database-13294",
  storageBucket: "task-database-13294.appspot.com",
  messagingSenderId: "947274588121",
  databaseURL:
    "https://task-database-13294-default-rtdb.asia-southeast1.firebasedatabase.app",
  appId: "1:947274588121:web:de1759af7655d4f9f643c8",
  measurementId: "G-LCW8Y803R4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const rdb = getDatabase(app);
