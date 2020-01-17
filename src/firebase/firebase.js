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

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
