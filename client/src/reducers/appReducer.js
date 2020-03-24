import { appTypes as at } from "../actions/types";
import { formatResponse } from "../utils/AppUtils";
import { postsReducer } from "./postsReducer";
const initialState = {
  subreddit: "memes",
  fetchingPosts: false,
  data: {}
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: true
      };
    case at.FINISHED_FETCHING_POSTS:
      return {
        ...state,
        fetchingPosts: false
      };
    case at.FETCH_POSTS_FROM_SUBREDDIT:
      console.log("FETCHING", action.payload);
      return {
        ...state,
        data: action.payload
      };

    case at.SET_SUBREDDIT:
      return {
        ...state,
        subreddit: action.payload
      };

    default:
      return state;
  }
};
