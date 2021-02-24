import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKJHN5vrHEKUJPFY0RCJTsvGm-aBvU7Fc",
    authDomain: "ty-crwn-clothing-db.firebaseapp.com",
    projectId: "ty-crwn-clothing-db",
    storageBucket: "ty-crwn-clothing-db.appspot.com",
    messagingSenderId: "1097559679512",
    appId: "1:1097559679512:web:153c0eccb8fbc69f2f196d",
    measurementId: "G-PC6QYF5X51"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;