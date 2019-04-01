import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchPosts, watchAuth } from "./sagas/index";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const composeEnhancers =
    //   process.env.NODE_ENV === "development"
    //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //     : null || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

const sagas = [watchPosts, watchAuth];

sagas.forEach(saga => {
  sagaMiddleware.run(saga);
});

export default store;
