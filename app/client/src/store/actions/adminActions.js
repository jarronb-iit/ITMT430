import * as actionTypes from './actionTypes';

// Get all users
export const getUsersInit = () => {
  return {
    type: actionTypes.GET_USERS_INIT
  };
};

// Get all users success
export const getUsersSuccess = users => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    payload: { users: users }
  };
};
