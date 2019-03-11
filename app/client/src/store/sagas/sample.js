import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions";

export function* getPostsSaga(action) {
  console.log(action);
  try {
    let response = yield axios.get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    yield put(actions.getPostsSuccess(response.data));
  } catch (errors) {
    yield console.log("ERROR", errors.response.data);
    yield put(actions.getErrors(errors.response.data));
  }
}
