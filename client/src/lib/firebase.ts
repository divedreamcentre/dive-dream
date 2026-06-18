import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0PtNHX0otaA4oIFjQGd8HtPoiD6wjThI",
  authDomain: "dive-dream-forms.firebaseapp.com",
  projectId: "dive-dream-forms",
  storageBucket: "dive-dream-forms.firebasestorage.app",
  messagingSenderId: "271967935493",
  appId: "1:271967935493:web:50a6d9e8d797a9dddf506c",
  measurementId: "G-K4RPMDYRGS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
