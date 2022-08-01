import {initializeApp} from "firebase/app"
import {Firestore, getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB2sCVCAY1Bx5mYzqXFXU41Xc3XWSOgR3s",
    authDomain: "todo-app-8b993.firebaseapp.com",
    projectId: "todo-app-8b993",
    storageBucket: "todo-app-8b993.appspot.com",
    messagingSenderId: "1093379488625",
    appId: "1:1093379488625:web:91d1118d5549bb8baa94d0"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);

  export {db};