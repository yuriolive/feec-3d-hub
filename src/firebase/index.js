import * as firebase from 'firebase';
import { stateChanged } from '../actions/actions-user';
import store from '../store';

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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(stateChanged(user));
  } else {
    store.dispatch(stateChanged(null));
  }
});

export default firebaseApp;
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
export const firebaseSt = firebase.storage();
