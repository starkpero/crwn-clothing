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

export default firebase;