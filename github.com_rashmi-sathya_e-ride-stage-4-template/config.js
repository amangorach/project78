import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyANiP5Bo3zpEXdPT1jhTtELwo9xxenGoBc",
  authDomain: "e-bike-1caef.firebaseapp.com",
  projectId: "e-bike-1caef",
  storageBucket: "e-bike-1caef.appspot.com",
  messagingSenderId: "56690793936",
  appId: "1:56690793936:web:e28366b8bc3dc7fc056dd5"
};





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


