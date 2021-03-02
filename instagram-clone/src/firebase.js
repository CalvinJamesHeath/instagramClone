// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "instagram-clone-a246d.firebaseapp.com",
    databaseURL: "https://instagram-clone-a246d.firebaseio.com",
    projectId: "instagram-clone-a246d",
    storageBucket: "instagram-clone-a246d.appspot.com",
    messagingSenderId: "903947255757",
    appId: "",
    measurementId: ""
})


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
