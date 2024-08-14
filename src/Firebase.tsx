import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCX2dRWFB5YwIuQTosgIaqNRETgINi5Rt8",
  authDomain: "portfolio-ab885.firebaseapp.com",
  projectId: "portfolio-ab885",
  storageBucket: "portfolio-ab885.appspot.com",
  messagingSenderId: "167181384554",
  appId: "1:167181384554:web:1614cfbe884f56b9fd8313",
  measurementId: "G-JZ0R1NE93X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;