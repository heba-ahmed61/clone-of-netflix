import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAm0enjfm3n3myqk-oHUOQ9C6fVqLytoKU",
    authDomain: "netflix-clone-c8f5b.firebaseapp.com",
    projectId: "netflix-clone-c8f5b",
    storageBucket: "netflix-clone-c8f5b.appspot.com",
    messagingSenderId: "1035974579398",
    appId: "1:1035974579398:web:e72e4d6b35a3999a8f33c7"
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
export {auth};
export default db;