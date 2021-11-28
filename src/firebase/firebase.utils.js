import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBcW5RMlX-KLfUWnX0WBWSmX3TNW-NnWX8",
  authDomain: "crwn-db-cb2a4.firebaseapp.com",
  projectId: "crwn-db-cb2a4",
  storageBucket: "crwn-db-cb2a4.appspot.com",
  messagingSenderId: "461735912288",
  appId: "1:461735912288:web:064221b0a3560fab4cf405",
  measurementId: "G-F86FKML5BR"
};

export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
