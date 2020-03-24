import { appTypes as at } from "./types";

export const setSubreddit = (sub = "") => ({
  type: at.SET_SUBREDDIT,
  payload: sub
});
