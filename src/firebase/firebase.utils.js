import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDyUR4ikQlPpmAq86gUj0PploCmi-xQKtU",
  authDomain: "ecom-project-1fed2.firebaseapp.com",
  databaseURL: "https://ecom-project-1fed2.firebaseio.com",
  projectId: "ecom-project-1fed2",
  storageBucket: "",
  messagingSenderId: "314689159774",
  appId: "1:314689159774:web:a444dc3edd49a2f6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
