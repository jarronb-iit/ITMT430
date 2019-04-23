import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: []
};

const getUsers = (state, action) => {
  console.log('HERE', action);
  state = {
    ...state,
    users: action.payload.users
  };
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_SUCCESS:
      return getUsers(state, action);
    default:
      return state;
  }
};

export default reducer;
