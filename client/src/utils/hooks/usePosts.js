// library imports
import axios from 'axios';
import { useQuery, useInfiniteQuery } from 'react-query';

// file imports
import { PROD_URL, DEV_URL } from '../AppUtils';

const URL = DEV_URL

export const usePosts = (subreddit = 'pics', query = '', nextId = 0) => {
  return useQuery('posts', () => postFetch(subreddit, query, nextId));
};

export const postFetch = (subreddit, query, nextId) => axios
  .get(`${URL}/api/r/${subreddit}?${query}cursor=${nextId}`)
  .then((response) => response.data);
