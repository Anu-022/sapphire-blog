import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASjOfrqjvZcDige2beksEJ90aU2Ry6UD8",
  authDomain: "sapphire-blog.firebaseapp.com",
  projectId: "sapphire-blog",
  storageBucket: "sapphire-blog.appspot.com",
  messagingSenderId: "135826970440",
  appId: "1:135826970440:web:3c37b375012ebea8fec57d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize db
const db = getFirestore(app)






export{db};