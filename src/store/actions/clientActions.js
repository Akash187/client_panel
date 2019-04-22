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

export const updateBalance = (id, newBalance) => {
  return (dispatch, getState) => {
    firestore.collection('clients')
      .doc('/' + id)
      .update({balance: newBalance})
      .then(() => {
        dispatch({type: 'UPDATE_BALANCE'})
      })
      .catch(function(error) {
        dispatch({type: 'UPDATE_BALANCE_ERROR', err: error.message})
      })
  }
};

export const deleteClient = (id) => {
  return(dispatch, getState) => {
    firestore.collection("clients")
      .doc('/' + id).delete()
      .then(() => {
      dispatch({type: 'DELETE_CLIENT'})
    }).catch(function(error) {
      dispatch({type: 'DELETE_CLIENT_ERROR', err: error.message})
    });
  }
};

export const updateClientDetail = (id, clientDetail) => {
  return(dispatch, getState) => {
    const authorId = getState().firebase.auth.uid;
    firestore.collection("clients")
      .doc('/' + id).set({ ...clientDetail, authorId })
      .then(() => {
        dispatch({type: 'UPDATE_CLIENT_DETAIL'});
      }).catch(function(error) {
      dispatch({type: 'UPDATE_CLIENT_DETAIL_ERROR', err: error.message})
    });
  }
};