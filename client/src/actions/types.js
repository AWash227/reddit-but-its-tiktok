export const postTypes = (() => {
  const FETCH_POSTS = "FETCH_POSTS";
  const SET_POST = "SET_POST";
  const SET_COUNT = "SET_COUNT";
  return {
    FETCH_POSTS,
    SET_POST,
    SET_COUNT
  };
})();

export const appTypes = (() => {
  const SET_SUBREDDIT = "SET_SUBREDDIT";
  return { SET_SUBREDDIT };
})();
