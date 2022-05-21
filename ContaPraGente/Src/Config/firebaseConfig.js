import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDAZW94sRnp3f-0_fzr31J6UFF1rQTFGHY",
    authDomain: "projetoeniac-f78f1.firebaseapp.com",
    projectId: "projetoeniac-f78f1",
    storageBucket: "projetoeniac-f78f1.appspot.com",
    messagingSenderId: "796186850738",
    appId: "1:796186850738:web:ec134c3f69928af15d20ab"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const database = firebase.firestore()
  
  export default database