import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYmOBOjSEtnNKuP92pkw-PgS0zFRNN4-M",
    authDomain: "robinhood-clone-3bd9c.firebaseapp.com",
    projectId: "robinhood-clone-3bd9c",
    storageBucket: "robinhood-clone-3bd9c.appspot.com",
    messagingSenderId: "994384786928",
    appId: "1:994384786928:web:6031259704856089c71935"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
export { db };