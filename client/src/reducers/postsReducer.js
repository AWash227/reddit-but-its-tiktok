import { postTypes as pt } from "../actions/types";
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
    case pt.FETCH_POSTS:
      const data = parseData(action.payload);
      return {
        ...state,
        data: data,
        numPosts: data.numPosts,
        posts: data.posts
      };

    case pt.SET_COUNT:
      return {
        ...state,
        count: action.payload
      };

    default:
      return state;
  }
};
