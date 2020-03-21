import { postTypes } from "../actions/types";
import parseData, {
  filterOutTextPosts,
  findImageSrc
} from "../utils/parseData";
const initialState = {
  data: {},
  count: 0,
  posts: [],
  post: ""
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postTypes.FETCH_POSTS:
      const data = parseData(action.payload);
      console.log(data.posts[0]);
      return {
        ...state,
        data: data,
        numPosts: data.numPosts,
        posts: data.posts
      };

    case postTypes.SET_COUNT:
      console.log(state.posts[action.payload]);
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};
