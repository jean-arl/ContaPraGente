import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAaym1k7pNDbas0sAqPtZKrYskUOznBAag",
    authDomain: "appcontapragente-f3a1a.firebaseapp.com",
    projectId: "appcontapragente-f3a1a",
    storageBucket: "appcontapragente-f3a1a.appspot.com",
    messagingSenderId: "380674899178",
    appId: "1:380674899178:web:7a8fc4090c3d880601ab93",
    measurementId: "G-CT1SRD9JTD"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);