import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import { fetchPostsFromSubreddit } from "./actions/postsActions";
import Home from "./components/Views/Home";
import { connect } from "react-redux";

const images = [
  " https://external-preview.redd.it/pVAP9bHGoxXFYXd2uVeMzP2WgS5SEIxPrY51iwsgC_Q.jpg?width=960&crop=smart&auto=webp&s=505800035a8253d20046ef9eafceee0ac5b2a6ff",
  "https://preview.redd.it/95an50waf1n41.jpg?width=640&height=800&crop=smart&auto=webp&s=8801d9aa9a4a532ac3ae8689288b0da90962bc5e"
];

function App({ posts, post, fetchPostsFromSubreddit }) {
  const [state, setState] = useState({
    imgNum: 1,
    image: images[1]
  });

  const findImageSrc = post => {
    if (post.thumbnail) {
      return post.thumbnail;
    } else {
      return -1;
    }
  };
  const fakeScroll = useCallback(() => {
    setState({
      ...state,
      image: findImageSrc(posts[state.imgNum]),
      imgNum: state.imgNum + 1
    });
  }, [posts, state]);
  const handleScroll = useCallback(() => {
    if (window.scrollY > 5) {
      if (posts.length) {
        console.log("Triggered new Post");
        setState({
          ...state,
          image: findImageSrc(posts[state.imgNum + 1]),
          imgNum: state.imgNum + 1
        });
      }
      window.scrollY = 0;
    }
  }, [posts, state]);
  // If posts are loaded in

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Initial Load
  useEffect(() => {
    fetchPostsFromSubreddit("pics");
  }, [fetchPostsFromSubreddit]);
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  // When posts changes

  return (
    <div className="App">
      <Home img={state.image} handleFakeScroll={fakeScroll} />
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { fetchPostsFromSubreddit })(App);
