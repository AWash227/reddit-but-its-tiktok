import React, { useState } from "react";
import Header from "../Header";
import Display from "../Display";
import Menu from "../Menu";
import Slider from "../Slider";


// import new hook to control fetching of data from API
import { usePosts } from '../../utils/hooks/usePosts';

const Home = ({
  subreddit,
  post,
  nextPost,
  prevPost,
  fetchPosts,
  loadNextPost,
  loadPrevPost
}) => {
  const [overlayActive, setOverlayActive] = useState(false);

  // See pull requests for full implementation
  const postsQuery = usePosts(subreddit)

  return (
    <div className="view home w-100 h-100" style={{ overflow: "hidden" }}>
      <Header subreddit={subreddit} fetchPosts={fetchPosts} />
      {/*
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost} x={0}
        y={-window.innerHeight}
        post={prevPost}
        autoplay={false}
      />
      
      */}
      <Display
        post={post}
        loadPrevPost={loadPrevPost}
        loadNextPost={loadNextPost}
        autoplay={true}
      />
      {/*
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost}
        x={50}
        y={-window.innerHeight * 2}
        post={nextPost}
        autoplay={false}
      />
      
      */}
      <Menu />
    </div>
  );
};

export default Home;
