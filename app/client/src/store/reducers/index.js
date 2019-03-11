import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import sampleReducer from "./sample";

export default combineReducers({
  errors: errorsReducer,
  sample: sampleReducer
});
