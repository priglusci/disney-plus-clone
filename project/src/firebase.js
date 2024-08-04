import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmzV4AHr2ya0Rhn22gO-NelW4ma2NKvbc",
  authDomain: "disneyplus-clone-16789.firebaseapp.com",
  projectId: "disneyplus-clone-16789",
  storageBucket: "disneyplus-clone-16789.appspot.com",
  messagingSenderId: "446459696401",
  appId: "1:446459696401:web:e4332ac320102a5f2c68b0",
  measurementId: "G-Q983DEJ3H5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;