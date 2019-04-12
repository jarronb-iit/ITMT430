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
    console.log('Token stored');

    config.headers['x-auth-token'] = token;
  }

  return config;
}

export function* loadUserSaga(action) {
  console.log(axiosInstance);

  yield put({ type: actionsTypes.USER_LOADING });

  const config = yield tokenConfig();
  console.log(config);

  try {
    const response = yield axiosInstance.get('/api/auth/user', config);
    yield console.log(response.data);

    yield console.log(response.data);
    const user = yield response.data;
    yield put(actions.loginSuccess(config.headers['x-auth-token'], user));
  } catch (error) {
    yield console.log(error.response.data.errors);
    // yield put({ type: actionsTypes.AUTH_ERROR });
    // yield put(actions.getErrors(error.response.data.errors));
  }
}
export function* loginUserSaga(action) {
  console.log('hererer');

  let body = yield {
    email: action.payload.email,
    password: action.payload.password
  };
  yield console.log('[BODY]', body);
  try {
    const tryPostRes = yield axiosInstance.post('/api/auth', body);
    yield console.log(tryPostRes.data);
    const { token, user } = yield tryPostRes.data;
    yield put(actions.loginSuccess(token, user));
  } catch (error) {
    yield console.log(error.response.data.errors);
    yield put({ type: actionsTypes.AUTH_ERROR });
    yield put(actions.getErrors(error.response.data.errors));
  }
}
