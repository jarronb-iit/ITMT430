import * as actionTypes from "./actionTypes";

export const getPostsInit = () => {
  return {
    type: actionTypes.GET_POSTS_INIT
  };
};

export const getPostsSuccess = posts => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    posts: posts
  };
};
