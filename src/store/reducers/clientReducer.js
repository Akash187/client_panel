const initState = {
  err : null
};

const clientReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_CLIENT':
      console.log('created client', action.clientDetail);
      return state;
    case 'ADD_CLIENT_ERROR':
      console.log('create project error', action.err);
      return {
        ...state,
        err: action.err
      };
    default:
      return state
  }
};

export default clientReducer;