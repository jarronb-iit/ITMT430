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

// Delete all listings
export const deleteListingsInit = () => {
  return {
    type: actionTypes.DELETE_LISTINGS_INIT
  };
};

// Delete listings success
export const deleteListingsSuccess = users => {
  return {
    type: actionTypes.GET_LISTINGS_INIT
  };
};
