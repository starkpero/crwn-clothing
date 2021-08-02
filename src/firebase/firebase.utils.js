import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBmfW8Xh2Y2qbCR3YvRYsp6kg0Oso5gnes",
    authDomain: "crwn-clothing-db-5fcee.firebaseapp.com",
    projectId: "crwn-clothing-db-5fcee",
    storageBucket: "crwn-clothing-db-5fcee.appspot.com",
    messagingSenderId: "338816049783",
    appId: "1:338816049783:web:10ade4097a80067daa1c72",
    measurementId: "G-MWWBX5GEXX"
};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating the user', error.message);
        }
    }
    return userRef;
}

export default firebase;