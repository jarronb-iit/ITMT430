import { put, select, call } from 'redux-saga/effects';
import axiosInstance from '../../axiosConfig';
import * as actions from '../actions';
import * as actionsTypes from '../actions/actionTypes';
import store from '../../store';

export async function tokenConfig() {
  const state = await store.getState();

  // Get token from storage
  const token = state.auth.token;
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token then add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}

export function* loadUsersSaga(action) {
  const config = yield tokenConfig();

  try {
    const response = yield axiosInstance.get('/api/admin/users', config);
    const users = yield response.data;
    console.log(users);

    yield put(actions.getUsersSuccess(users));
  } catch (error) {
    console.log(error);

    yield put(actions.getErrors(error.response.data.errors));
  }
}
