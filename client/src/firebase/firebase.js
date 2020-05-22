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
  measurementId: 'G-E75TXN0ZSS',
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
        ...additionalData,
      });
    } catch (error) {
      console.log('Failed creating user', error);
    }
  }
  return userRef;
};

export const getCurrentUserCart = async (userId) => {
  try {
    const cartsRef = firestore
      .collection('carts')
      .where('userId', '==', userId);
    const snapShot = await cartsRef.get();

    if (snapShot.empty) {
      const cartDocRef = firestore.collection('carts').doc();
      await cartDocRef.set({ userId, cartItems: [] });
      return cartDocRef;
    } else {
      return snapShot.docs[0].ref;
    }
  } catch (error) {
    console.log('Failed trying to get cart', error);
  }
};

export const convertCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      routeName: encodeURI(title.toLowerCase()),
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const saveMessage = async (name, email, description) => {
  try {
    const newMessageRef = firestore.collection('messages').doc();
    await newMessageRef.set({
      name,
      email,
      description,
    });
    return newMessageRef;
  } catch (error) {
    console.log('Failed to send message', error);
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
