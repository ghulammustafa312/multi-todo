import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mO_WoakJX58aMD9VdGCGcrjzHZsJCAA",
  authDomain: "todo-simple-4d589.firebaseapp.com",
  projectId: "todo-simple-4d589",
  storageBucket: "todo-simple-4d589.appspot.com",
  messagingSenderId: "410599841619",
  appId: "1:410599841619:web:3d2d5f3149db8495e88ba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
