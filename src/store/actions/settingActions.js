import {firestore} from "../../config/fbConfig";

export const updateSetting = (updatedSetting) => {
  return (dispatch, getState) => {
    const authorId = getState().firebase.auth.uid;
    firestore.collection('setting').doc(authorId).set(updatedSetting).then(() => {
      dispatch({
        type: 'UPDATE_SETTING',
        data: updatedSetting
      })
    }).catch((err) => {
      dispatch({type: 'UPDATE_SETTING_ERROR', err: err.message})
    });
  };
};