import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAMNiJo-7xjix0wNBNrTc-iCdfGp00Fb14",
  authDomain: "disneyplus-clone-650a2.firebaseapp.com",
  projectId: "disneyplus-clone-650a2",
  storageBucket: "disneyplus-clone-650a2.appspot.com",
  messagingSenderId: "998819150481",
  appId: "1:998819150481:web:d4394fb743709cfd7d9d30"
};

 const firebaseApp = firebase.initializeApp(config);
 const db = firebaseApp.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  const storage = firebase.storage();
  export {auth,provider,storage};
  export default db;