import { formatPost } from "./PostUtils";

export const formatResponse = data => ({
  before: data.data.before,
  after: data.data.after,
  numPosts: data.data.dist,
  posts: data.data.children.map(post => formatPost(post.data))
});

export const DEV_URL = `http://localhost:5000`;
export const PROD_URL = ``;
