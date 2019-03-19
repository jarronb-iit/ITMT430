import { put, select } from "redux-saga/effects";
import axiosInstance from "../../axiosConfig";
import * as actions from "../actions";
import * as actionsTypes from "../actions/actionTypes";

export function* tokenConfig() {
  const state = yield select();
  console.log(state);

  // Get token from storage
  const token = state.auth.token;
  // Headers
  const config = {
    headers: {
      "Content-type": "application"
    }
  };

  // If token then add to headers
  if (token) {
    yield (config.headers["x-auth-token"] = token);
  }

  return config;
}
export function* loadUserSaga(action) {
  console.log(action);

  yield put({ type: actionsTypes.USER_LOADING });

  // const config = tokenConfig().next().value;
  // console.log("TOKEN", config);
  try {
    // const response = yield axiosInstance.get("/api/auth/user", config);
    // console.log(response.data);
    let body = {
      email: "baileyjarron@gmail.com",
      password: "password"
    };

    const tryPostRes = yield axiosInstance.post("/api/auth", body);
    console.log(tryPostRes.data);
    const { token, user } = tryPostRes.data;
    yield put(actions.loginSuccess(token, user));
    yield put(actions.loadUserSuccess());
  } catch (error) {
    console.log(error.response.data.errors);
    yield put({ type: actionsTypes.AUTH_ERROR });
    yield put(actions.getErrors(error.response.data.errors));
  }
}
