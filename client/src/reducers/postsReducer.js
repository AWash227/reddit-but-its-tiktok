import { postTypes as pt } from "../actions/types";
import { formatResponse } from "../utils/AppUtils";
import { fetchPostsFromSubreddit } from "../actions/appActions";

const initialState = {
  data: {},
  count: 3,
  posts: [],
  numPosts: 0,
  post: {}
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case pt.SET_POSTS:
      console.log(`Setting posts to: `, action.payload);
      switch (action.payload.query) {
        case "BEFORE":
          return {
            ...state,
            posts: action.payload.posts,
            count: action.payload.numPosts
          };
        case "AFTER":
          return {
            ...state,
            posts: action.payload.posts,
            count: 0
          };
        default:
          return {
            ...state,
            posts: action.payload.posts,
            count: 0
          };
      }
    case pt.SET_COUNT:
      console.log(state.posts[state.count]);
      return {
        ...state,
        count: action.payload
      };

    case pt.LOAD_NEXT_POST:
    default:
      return state;
  }
};
