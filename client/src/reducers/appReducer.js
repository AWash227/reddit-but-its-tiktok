import { appTypes as at } from "../actions/types";
const initialState = {
  subreddit: "memes"
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case at.SET_SUBREDDIT:
      return {
        ...state,
        subreddit: action.payload
      };

    default:
      return state;
  }
};
