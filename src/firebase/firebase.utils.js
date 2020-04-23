import firebase from 'firebase/app';
import 'firebase/firestore'; //store data
import 'firebase/auth'; //auth

const config = {
    apiKey: "AIzaSyB4l3JBugGI7vQ5h_kxbL4i6fs46KovslY",
    authDomain: "e-clothing-a1973.firebaseapp.com",
    databaseURL: "https://e-clothing-a1973.firebaseio.com",
    projectId: "e-clothing-a1973",
    storageBucket: "e-clothing-a1973.appspot.com",
    messagingSenderId: "94380916878",
    appId: "1:94380916878:web:cc11e43e2fc2c464a389df"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; //if user not exist

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();
    
    try{
      //kiedy chce dodać dane elementy a wcześniej wybrałem nieistniejący dokument to stworzy mi ten dokument na podstawie uid
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user ', error.message)
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
export default firebase;
