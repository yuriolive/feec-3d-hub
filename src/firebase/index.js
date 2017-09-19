import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA9r_2kH8S7rzG0iEz2ue3ZzuqxESCz3BI',
  authDomain: 'feec-3d-hub.firebaseapp.com',
  databaseURL: 'https://feec-3d-hub.firebaseio.com',
  projectId: 'feec-3d-hub',
  storageBucket: 'feec-3d-hub.appspot.com',
  messagingSenderId: '210703896722',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
