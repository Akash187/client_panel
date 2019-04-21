import {auth} from "../../config/fbConfig";
import {firestore} from "../../config/fbConfig";

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    auth.signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err})
    });
  }
};

export const signOut = () => {
  return (dispatch, getState) => {
    auth.signOut().then(() => {
      dispatch({type: 'SIGNOUT_SUCCESS'})
    })
  }
};

export const signUp = (newUser) => {
  return (dispatch, getState) => {
    auth.createUserWithEmailAndPassword(
      newUser.email, newUser.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid)
        .set({
          name: newUser.name
        })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'});
    }).catch((err) => {
      console.log(err);
      dispatch({type: 'SIGNUP_ERROR', err: err.message});
    })
  }
};