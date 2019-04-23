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

export function* loadListingsSaga(action) {
  const config = yield tokenConfig();

  try {
    const response = yield axiosInstance.get('/api/listings', config);
    const listings = yield response.data;
    console.log(listings);

    yield put(actions.getListingsSuccess(listings));
  } catch (error) {
    yield put(actions.getErrors(error.response.data.errors));
  }
}

export function* addListingSaga(action) {
  const config = yield tokenConfig();

  try {
    const tryPostRes = yield axiosInstance.post(
      '/api/listings',
      action.payload.listing,
      config
    );
    const { listing } = yield tryPostRes.data;
    yield put(actions.addListingsSuccess(listing));
  } catch (error) {
    yield put(actions.getErrors(error.response.data.errors));
  }
}
