import React from "react";
import Header from "../Header";
import Display from "../Display";
import Interactions from "../Interactions";
import Menu from "../Menu";
import {
  IoIosHeart,
  IoIosChatbubbles,
  IoIosShare,
  IoIosRedo
} from "react-icons/io";
import { prettifyNumber } from "../../utils/parseData";

const Home = ({
  subreddit,
  post,
  nextPost,
  prevPost,
  loadNextPost,
  loadPrevPost
}) => {
  const interactions = [
    { icon: <IoIosHeart size={35} />, stat: prettifyNumber(post.score) },
    {
      icon: <IoIosChatbubbles size={35} />,
      stat: prettifyNumber(post.num_comments)
    },
    { icon: <IoIosRedo size={35} />, stat: "4763" }
  ];
  return (
    <div className="view home w-100 h-100" style={{ overflow: "hidden" }}>
      <Header subreddit={subreddit} />
      {/*
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost}
        x={0}
        y={-window.innerHeight}
        post={prevPost}
        autoplay={false}
      />
      
      */}
      <Display
        onSwipedDown={loadNextPost}
        onSwipedUp={loadPrevPost}
        x={50}
        y={0}
        post={post}
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
      <Interactions interactions={interactions} />
      <Menu />
    </div>
  );
};

export default Home;
