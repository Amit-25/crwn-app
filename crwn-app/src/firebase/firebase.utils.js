import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCXDQOvzrLDApIAZKe8YcdQJZCWpV3NTmY",
  authDomain: "crown-dbase-52dcb.firebaseapp.com",
  databaseURL: "https://crown-dbase-52dcb.firebaseio.com",
  projectId: "crown-dbase-52dcb",
  storageBucket: "crown-dbase-52dcb.appspot.com",
  messagingSenderId: "904919251926",
  appId: "1:904919251926:web:11ec24e10a56850c5f8277",
  measurementId: "G-6EY95EHHQ3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(e){
      console.log(e);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;