import { postTypes as pt } from "../actions/types";
import { formatResponse } from "../utils/AppUtils";
import { fetchPostsFromSubreddit } from "../actions/appActions";
import {
  mapOutChildren,
  recursiveMapOutChildren,
  getAllChildren
} from "../utils/PostUtils";

const initialState = {
  data: {},
  count: 3,
  posts: [],
  numPosts: 0,
  post: {},
  fetchingComment: false,
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
            count: action.payload.posts.length - 1
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
    case pt.FETCHING_COMMENTS:
      return {
        ...state,
        fetchingComment: true
      }
    case pt.FETCH_COMMENTS_FROM_POST:
      // console.log("COMMENTS:", action.payload);
      let newPosts = [...state.posts];
      newPosts[state.count] = {
        ...newPosts[state.count],
        comments: action.payload
      };
      return {
        ...state,
        posts: newPosts
      };
    case pt.FINISHED_FETCHING_COMMENTS:
      return {
        ...state,
        fetchingComment: false
      }
    case pt.LOAD_NEXT_POST:
    default:
      return state;
  }
};
