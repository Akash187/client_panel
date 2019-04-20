import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyAm8aSfB7JIspms1sJsTiU5DrtALQnspaY",
  authDomain: "client-panel-eb757.firebaseapp.com",
  databaseURL: "https://client-panel-eb757.firebaseio.com",
  projectId: "client-panel-eb757",
  storageBucket: "client-panel-eb757.appspot.com",
  messagingSenderId: "998562889061"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

export {
  firebase,
  firestore,
  auth
};