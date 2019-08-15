import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB_ab8XV999FsjIden25y6tjlatbQ-m-pw',
  authDomain: 'fsproject-ef54f.firebaseapp.com',
  databaseURL: 'https://fsproject-ef54f.firebaseio.com',
  projectId: 'fsproject-ef54f',
  storageBucket: '',
  messagingSenderId: '119367465578',
  appId: '1:119367465578:web:268027dfbdd582ed'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
