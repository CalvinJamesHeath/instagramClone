// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUo6fdRt9ZaShwZOxJA4RmU0SLf_Whego",
    authDomain: "instagram-clone-a246d.firebaseapp.com",
    databaseURL: "https://instagram-clone-a246d.firebaseio.com",
    projectId: "instagram-clone-a246d",
    storageBucket: "instagram-clone-a246d.appspot.com",
    messagingSenderId: "903947255757",
    appId: "1:903947255757:web:b9fd7644349cfd49f78e84",
    measurementId: "G-60G6QWFZ5J"
})


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};
