import { takeEvery, take, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authSaga from './authSaga';
import * as listingsSaga from './listingsSaga';

export function* watchAuth() {
  yield takeLatest(actionTypes.USER_LOAD_INIT, authSaga.loadUserSaga);
  yield takeLatest(actionTypes.LOGIN_INIT, authSaga.loginUserSaga);
  yield takeLatest(actionTypes.REGISTER_INIT, authSaga.registerUserSaga);
  yield takeLatest(actionTypes.DELETE_USER_INIT, authSaga.deleteUserSaga);
}

export function* watchListings() {
  yield takeLatest(
    actionTypes.GET_LISTINGS_INIT,
    listingsSaga.loadListingsSaga
  );
  yield takeLatest(actionTypes.ADD_LISTINGS_INIT, listingsSaga.addListingSaga);
}
