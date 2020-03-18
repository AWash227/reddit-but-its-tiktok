import { postTypes as pt } from "./types";

export const fetchPostsFromSubreddit = (subreddit = "pics") => dispatch => {
  fetch(`https://reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(res => {
      dispatch({
        type: pt.FETCH_POSTS,
        payload: res.data.children.map(child => child.data)
      });
    })
    .catch(err => console.error(err));
};
