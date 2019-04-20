import {firestore} from "../../config/fbConfig";

export const createProject = (project) => {
  return (dispatch, getState) => {
    //make async call to database
    const profile = getState().firebase.profile;

  }
};