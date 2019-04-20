import {auth} from "../../config/fbConfig";

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