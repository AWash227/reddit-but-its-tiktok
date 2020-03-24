import { postTypes as pt, appTypes } from "./types";
import axios from "axios";

export const fetchPostsFromSubreddit = (
  subreddit = "pics",
  query = ""
) => dispatch => {
  axios
    .get(`http://192.168.1.78:5000/r/${subreddit}${query}`)
    .then(res => {
      dispatch({ type: pt.FETCH_POSTS, payload: res.data });
    })
    .catch(err => console.error(err));
};

export const setCount = (count = 0) => ({
  type: pt.SET_COUNT,
  payload: count
});

export const setSubreddit = (sub = "") => ({
  type: appTypes.SET_SUBREDDIT,
  payload: sub
});
