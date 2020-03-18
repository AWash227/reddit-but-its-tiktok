import { postTypes } from "../actions/types";
const initialState = {
  posts: [],
  post: ""
};
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.FETCH_POSTS:
      console.log("HI", action.payload);
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
