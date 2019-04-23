import * as actionTypes from './actionTypes';

// Get all listings
export const getListingsInit = () => {
  return {
    type: actionTypes.GET_LISTINGS_INIT
  };
};

// Get all listings success
export const getListingsSuccess = listings => {
  return {
    type: actionTypes.GET_LISTINGS_SUCCESS,
    payload: { listings: listings }
  };
};

// Add listing
export const addListingInit = listing => {
  return {
    type: actionTypes.ADD_LISTING_INIT,
    payload: { listing: listing }
  };
};

// Get all listing success
export const addListingSuccess = listings => {
  return {
    type: actionTypes.GET_LISTINGS_INIT
  };
};
