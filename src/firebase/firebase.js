import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBU8NyNoX9XJ0F6udKmdfU_L84ULOMvuDA',
  authDomain: 'store-db-db0cc.firebaseapp.com',
  databaseURL: 'https://store-db-db0cc.firebaseio.com',
  projectId: 'store-db-db0cc',
  storageBucket: 'store-db-db0cc.appspot.com',
  messagingSenderId: '398469642597',
  appId: '1:398469642597:web:b90c810269ca2a4e32498c',
  measurementId: 'G-E75TXN0ZSS'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firstore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
