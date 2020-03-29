import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import { setCount } from "./actions/postsActions";
import { fetchPostsFromSubreddit } from "./actions/appActions";
import { nextPost, fetchCommentsFromPost } from "./actions/postsActions";
import Home from "./components/Views/Home";
import { connect } from "react-redux";
import { FullScreenLoader } from "./components/Loader";
import { getMediaSrc } from "./utils/PostUtils";

function App({
  app,
  data,
  posts,
  count,
  fetchPostsFromSubreddit,
  fetchCommentsFromPost,
  setCount
}) {
  const loadNextPost = useCallback(() => {
    if (count === posts.length - 1) {
      fetchPostsFromSubreddit(app.subreddit, `?after=${app.data.after}`);
    } else if (count < posts.length) {
      setCount(count + 1);
    }
  }, [count, app.subreddit]);

  const loadPreviousPost = () => {
    if (count === 0) {
      fetchPostsFromSubreddit(app.subreddit, `?before=${app.data.before}`);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };
  // Initial Load
  useEffect(() => {
    fetchPostsFromSubreddit(app.subreddit);
  }, []);

  useEffect(() => {
    // Preload all posts
    posts.map(post => {
      new Image().src = post.thumbnail;
    });
  }, [posts]);

  useEffect(() => {
    if (posts.length) {
      fetchCommentsFromPost(posts[count].id, "");
    }
  }, [count]);

  console.log(app.subreddit);
  return (
    <div className="App">
      <FullScreenLoader active={app.fetchingPosts} />
      <Home
        subreddit={app.subreddit}
        fetchPosts={fetchPostsFromSubreddit}
        post={posts[count] ? posts[count] : { title: "PLACEHOLDER", image: "" }}
        loadNextPost={() => loadNextPost()}
        loadPrevPost={() => loadPreviousPost()}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  post: state.posts.post,
  count: state.posts.count,
  data: state.posts.data,
  app: state.app
});

const mapDispatchToProps = {
  fetchPostsFromSubreddit,
  fetchCommentsFromPost,
  setCount,
  nextPost
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
