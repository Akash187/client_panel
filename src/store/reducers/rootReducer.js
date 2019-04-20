import authReducer from './authReducer';
import clientReducer from './clientReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;