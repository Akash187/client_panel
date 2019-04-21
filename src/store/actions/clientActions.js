import {firestore} from "../../config/fbConfig";

export const addClient = (clientDetail) => {
  return (dispatch, getState) => {
    //make async call to database
    const authorId = getState().firebase.auth.uid;
    firestore.collection('clients').add({
      ...clientDetail,
      authorId
    }).then(() => {
      dispatch({
        type: 'ADD_CLIENT',
        clientDetail
      })
    }).catch((err) => {
      dispatch({type: 'ADD_CLIENT_ERROR', err: err.message})
    });
  }
};