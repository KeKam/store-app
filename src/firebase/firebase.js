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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Failed creating user', error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
