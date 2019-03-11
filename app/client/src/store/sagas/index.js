import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as sampleSaga from "./sample";

export function* watchPosts() {
  yield takeEvery(actionTypes.GET_POSTS_INIT, sampleSaga.getPostsSaga);
}
