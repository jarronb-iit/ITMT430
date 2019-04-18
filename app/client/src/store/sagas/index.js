import { takeEvery, take, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authSaga from './authSaga';

export function* watchAuth() {
  yield takeLatest(actionTypes.USER_LOAD_INIT, authSaga.loadUserSaga);
  yield takeLatest(actionTypes.LOGIN_INIT, authSaga.loginUserSaga);
  yield takeLatest(actionTypes.REGISTER_INIT, authSaga.registerUserSaga);
}
