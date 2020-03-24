import { postTypes as pt, appTypes as at } from "./types";

export const setCount = (count = 0) => ({
  type: pt.SET_COUNT,
  payload: count
});

export const nextPost = () => ({
  type: pt.LOAD_NEXT_POST
});
