import {firestore} from "../../config/fbConfig";

export const updateSetting = (updatedSetting) => {
  console.log(updatedSetting);
  return (dispatch, getState) => {
    const authorId = getState().firebase.auth.uid;
    firestore.collection('setting').doc(authorId).set(updatedSetting).then(() => {
      console.log("setting update success");
      dispatch({
        type: 'UPDATE_SETTING',
        data: updatedSetting
      })
    }).catch((err) => {
      console.log("error update setup");
      dispatch({type: 'UPDATE_SETTING_ERROR', err: err.message})
    });
  };
};