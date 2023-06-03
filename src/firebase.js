import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBsWuI5_o2hXAdAR86HgZ0CqzAkWpmUMSc",
  authDomain: "pixie-park.firebaseapp.com",
  projectId: "pixie-park",
  storageBucket: "pixie-park.appspot.com",
  messagingSenderId: "452270770605",
  appId: "1:452270770605:web:6907690a95254e0ab6f924",
  measurementId: "G-2TJ1KJJPF6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;