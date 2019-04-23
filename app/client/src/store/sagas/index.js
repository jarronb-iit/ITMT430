import { takeEvery, take, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as authSaga from './authSaga';
import * as listingsSaga from './listingsSaga';
import * as adminSaga from './adminSaga';

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
  yield takeLatest(actionTypes.ADD_LISTING_INIT, listingsSaga.addListingSaga);
  yield takeLatest(actionTypes.GET_LISTING_INIT, listingsSaga.getListingSaga);
}

export function* watchAdmin() {
  yield takeLatest(actionTypes.GET_USERS_INIT, adminSaga.loadUsersSaga);
  yield takeLatest(
    actionTypes.DELETE_LISTINGS_INIT,
    adminSaga.deleteListingsSaga
  );
  yield takeLatest(actionTypes.DELETE_USERS_INIT, adminSaga.deleteUsersSaga);
}
