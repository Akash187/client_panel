const initState = {
  err : null
};

const clientReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_CLIENT':
      return {
        ...state,
        err: null
      };
    case 'ADD_CLIENT_ERROR':
      return {
        ...state,
        err: action.err
      };
    case 'UPDATE_BALANCE':
      return {
        ...state,
        err: null
      };
    case 'UPDATE_BALANCE_ERROR':
      return {
        ...state,
        err: action.err
      };
    case 'DELETE_CLIENT':
      return {
        ...state,
        err: null
      };
    case 'DELETE_CLIENT_ERROR':
      return {
        ...state,
        err: action.err
      };
    case 'UPDATE_CLIENT_DETAIL':
      return {
        ...state,
        err: null
      };
    case 'UPDATE_CLIENT_DETAIL_ERROR':
      return {
        ...state,
        err: action.err
      };
    default:
      return state
  }
};

export default clientReducer;