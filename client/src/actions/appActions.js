import { appTypes as at, postTypes as pt } from "./types";
import axios from "axios";
import { formatResponse } from "../utils/AppUtils";
import { PROD_URL, DEV_URL } from "../utils/AppUtils";

// Change me to DEV_URL if you are trying to run the app locally
const URL = PROD_URL;

export const fetchPostsFromSubreddit = (
  subreddit = "pics",
  query = ""
) => dispatch => {
  dispatch({ type: at.FETCHING_POSTS });
  axios
    .get(`${URL}/api/r/${subreddit}${query}`)
    .then(res => {
      const data = formatResponse(res.data);
      let bOA = "";
      if (query.includes("before")) {
        bOA = "BEFORE";
      } else if (query.includes("after")) {
        bOA = "AFTER";
      } else {
        bOA = "";
      }
      dispatch({ type: at.FETCH_POSTS_FROM_SUBREDDIT, payload: data });
      dispatch({
        type: pt.SET_POSTS,
        payload: { posts: data.posts, numPosts: data.numPosts - 1, query: bOA }
      });
      dispatch({ type: at.FINISHED_FETCHING_POSTS });
    })
    .catch(err => console.error(err));
};

export const setSubreddit = (sub = "") => ({
  type: at.SET_SUBREDDIT,
  payload: sub
});
