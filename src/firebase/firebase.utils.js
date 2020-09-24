import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhb_FhKTKmzcYF8W_jJsBCfeX-RfNRx50",
    authDomain: "ecommerce-db-a7208.firebaseapp.com",
    databaseURL: "https://ecommerce-db-a7208.firebaseio.com",
    projectId: "ecommerce-db-a7208",
    storageBucket: "ecommerce-db-a7208.appspot.com",
    messagingSenderId: "474997011884",
    appId: "1:474997011884:web:1f7b8ce8e3325e34393609"
};

export const createUserProfileDocument = async (userAuth, additionnalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionnalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);
