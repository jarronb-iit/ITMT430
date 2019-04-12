import { put, select, call } from 'redux-saga/effects';
import axiosInstance from '../../axiosConfig';
import * as actions from '../actions';
import * as actionsTypes from '../actions/actionTypes';

export async function tokenConfig() {
  // const state = await select();
  // console.log(state);

  // Get token from storage
  const token = localStorage.getItem('token');
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

export function* loadUserSaga(action) {
  yield put({ type: actionsTypes.USER_LOADING });

  const config = yield tokenConfig();
  try {
    const response = yield axiosInstance.get('/api/auth/user', config);
    const user = yield response.data;
    yield put(actions.loginSuccess(config.headers['x-auth-token'], user));
  } catch (error) {
    yield put({ type: actionsTypes.AUTH_ERROR });
    yield put(actions.getErrors(error.response.data.errors));
  }
}
export function* loginUserSaga(action) {
  let body = yield {
    email: action.payload.email,
    password: action.payload.password
  };
  try {
    const tryPostRes = yield axiosInstance.post('/api/auth', body);
    const { token, user } = yield tryPostRes.data;
    yield put(actions.loginSuccess(token, user));
  } catch (error) {
    yield put({ type: actionsTypes.AUTH_ERROR });
    yield put(actions.getErrors(error.response.data.errors));
  }
}
