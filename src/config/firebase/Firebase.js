import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC3nzv-J7pYMB18S7EgYDVSdJynoGCO4wU",
    authDomain: "clone-tiktok-6db6c.firebaseapp.com",
    projectId: "clone-tiktok-6db6c",
    storageBucket: "clone-tiktok-6db6c.appspot.com",
    messagingSenderId: "825515557888",
    appId: "1:825515557888:web:3bb46970c8ad1c992904e5"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export default db