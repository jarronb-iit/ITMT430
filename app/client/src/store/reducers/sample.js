import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  postsLoaded: false
};

const getPosts = (state, action) => {
  console.log("HERE", action);
  state = {
    ...state,
    posts: action.posts,
    postsLoaded: true
  };
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_SUCCESS:
      return getPosts(state, action);
    default:
      return state;
  }
};

export default reducer;
