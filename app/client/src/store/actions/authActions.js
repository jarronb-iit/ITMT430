import * as actionTypes from './actionTypes';
import { select } from 'redux-saga/effects';

// Check token and load user
export const loadUserInit = () => {
  return {
    type: actionTypes.USER_LOAD_INIT
  };
};

export const loadUserSuccess = () => {
  return {
    type: actionTypes.USER_LOADED
  };
};

export const loginInit = (email, password) => {
  return {
    type: actionTypes.LOGIN_INIT,
    payload: { email: email, password: password }
  };
};

export const loginSuccess = (token, user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: { token: token, user: user }
  };
};
