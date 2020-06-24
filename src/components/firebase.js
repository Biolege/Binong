import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHBkThWSBVdm6UsHm4VR6vrwTowwlMCeA",
    authDomain: "react-auth-a203b.firebaseapp.com",
    databaseURL: "https://react-auth-a203b.firebaseio.com",
    projectId: "react-auth-a203b",
    storageBucket: "react-auth-a203b.appspot.com",
    messagingSenderId: "712776874495",
    appId: "1:712776874495:web:cb16ea3b190c5b15cc0fca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;