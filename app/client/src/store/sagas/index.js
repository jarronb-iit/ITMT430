import { takeEvery, take, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as sampleSaga from './sampleSaga';
import * as authSaga from './authSaga';

export function* watchPosts() {
  yield takeEvery(actionTypes.GET_POSTS_INIT, sampleSaga.getPostsSaga);
}

export function* watchAuth() {
  yield takeLatest(actionTypes.USER_LOAD_INIT, authSaga.loadUserSaga);
  yield takeLatest(actionTypes.LOGIN_INIT, authSaga.loginUserSaga);
}
