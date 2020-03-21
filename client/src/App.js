import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import { fetchPostsFromSubreddit, setCount } from "./actions/postsActions";
import Home from "./components/Views/Home";
import { connect } from "react-redux";
import { findImageSrc } from "./utils/parseData";

const images = [
  " https://external-preview.redd.it/pVAP9bHGoxXFYXd2uVeMzP2WgS5SEIxPrY51iwsgC_Q.jpg?width=960&crop=smart&auto=webp&s=505800035a8253d20046ef9eafceee0ac5b2a6ff",
  "https://preview.redd.it/95an50waf1n41.jpg?width=640&height=800&crop=smart&auto=webp&s=8801d9aa9a4a532ac3ae8689288b0da90962bc5e"
];

function App({ app, data, posts, count, fetchPostsFromSubreddit, setCount }) {
  const fakeScroll = useCallback(
    num => {
      // If posts are loaded in
      if (posts.length) {
        // And not at end of array
        if (count < data.numPosts - 1) {
          if (findImageSrc(posts[count + num])) {
            // And the post has an image
            setCount(count + num);
          }
        } else {
          fetchPostsFromSubreddit(app.subreddit, `?after=${data.after}`);
          setCount(0);
        }
      }
    },
    [posts, count]
  );

  /*
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  */

  // Initial Load
  useEffect(() => {
    fetchPostsFromSubreddit(app.subreddit);
    console.log("POSTS: ", posts);
  }, []);

  console.log(app.subreddit);
  return (
    <div className="App">
      <Home
        subreddit={app.subreddit}
        prevPost={
          posts[count - 1]
            ? posts[count - 1]
            : { title: "PREV_POST", image: "" }
        }
        post={posts[count] ? posts[count] : { title: "PLACEHOLDER", image: "" }}
        nextPost={
          posts[count + 1]
            ? posts[count + 1]
            : { title: "NEXT_POST", image: "" }
        }
        loadNextPost={() => fakeScroll(1)}
        loadPrevPost={() => fakeScroll(-1)}
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
  setCount
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
