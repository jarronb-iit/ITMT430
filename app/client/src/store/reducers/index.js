import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import sampleReducer from "./sample";
import authReducer from "./authReducer";

export default combineReducers({
  errors: errorsReducer,
  sample: sampleReducer,
  auth: authReducer
});
