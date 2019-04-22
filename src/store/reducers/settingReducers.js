const initState = {
  err: null
};

const settingReducer = (state = initState, action) => {
  switch(action.type){
    case 'UPDATE_SETTING':
      return {
        ...state,
        err: null
      };
    case 'UPDATE_SETTING_ERROR':
      return {
        ...state,
        err: action.err
      };
    default:
      return state
  }
};

export default settingReducer;