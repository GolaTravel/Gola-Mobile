//firebase configaration key setup
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import "firebase/compat/firestore"


//my web app fire base config

const firebaseConfig = {
    apiKey: "AIzaSyANbmN5DwGqUB6UkcNXSyOZXH-2ZdbyzcE",
    authDomain: "gola-5bb7c.firebaseapp.com",
    projectId: "gola-5bb7c",
    storageBucket: "gola-5bb7c.appspot.com",
    messagingSenderId: "1002403156146",
    appId: "1:1002403156146:web:37dd33371ceeb3689df9ab"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
