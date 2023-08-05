import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: 'AIzaSyCsJEF2_VKglaQmLRKdZIZZtXY7Y-wNZ1s',
    authDomain: 'disneyplus-clone-f29e6.firebaseapp.com',
    projectId: 'disneyplus-clone-f29e6',
    storageBucket: 'disneyplus-clone-f29e6.appspot.com',
    messagingSenderId: '95598651335',
    appId: '1:395598651335:web:25449e329220152e1843e2',
    measurementId: 'G-BWZH70SKXH',
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;