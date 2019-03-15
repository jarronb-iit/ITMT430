import * as actionTypes from "./actionTypes";

// GET ERRORS
export const getErrors = errors => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { errors: errors }
  };
};

// Clear errors
export const clearErrors = errors => {
  return {
    type: actionTypes.CLEAR_ERRORS,
    payload: { errors: errors }
  };
};
