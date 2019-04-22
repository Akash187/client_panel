import authReducer from './authReducer';
import clientReducer from './clientReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import settingReducer from "./settingReducers";

const rootReducer = combineReducers({
  setting: settingReducer,
  auth: authReducer,
  client: clientReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;