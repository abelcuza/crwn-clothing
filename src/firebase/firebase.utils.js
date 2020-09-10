import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase congig params
const config = {
    apiKey: "AIzaSyDVmiEAo19-y6aSXJ0Qt5vKGU1NcIwWrpY",
    authDomain: "crown-db-957cb.firebaseapp.com",
    databaseURL: "https://crown-db-957cb.firebaseio.com",
    projectId: "crown-db-957cb",
    storageBucket: "crown-db-957cb.appspot.com",
    messagingSenderId: "117128440364",
    appId: "1:117128440364:web:c8ae30980ddcfe8dbc7f89",
    measurementId: "G-R5C84E2GYB"
};

// Firebase auth user storage on the database
export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({ displayName, email, createdAt, ...aditionalData })
        }catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Configuring the Sign In with Google Account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
