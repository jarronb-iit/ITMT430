import * as actionTypes from '../actions/actionTypes';

const initialState = {
  listings: []
};

const getListings = (state, action) => {
  state = {
    ...state,
    listings: action.payload.listings
  };
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LISTINGS_SUCCESS:
      return getListings(state, action);
    default:
      return state;
  }
};

export default reducer;
