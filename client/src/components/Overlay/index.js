import React, { useState, useEffect } from "react";
import { IoIosHeart, IoIosChatbubbles, IoIosRedo } from "react-icons/io";
import { comments } from "../../stories/5-Comments.stories";
import { numToString, getChildren } from "../../utils/PostUtils";
import Interactions from "../Interactions";
import BottomDrawer from "../BottomDrawer";
import "./index.scss";
import Comments from "../Comments";

const Overlay = ({ post, active }) => {
  const [commentsActive, setCommentsActive] = useState(false);
  const interactions = [
    { icon: <IoIosHeart size={35} />, stat: numToString(post.score) },
    {
      icon: <IoIosChatbubbles size={35} />,
      stat: numToString(post.num_comments),
      onClick: () => setCommentsActive(true)
    },
    { icon: <IoIosRedo size={35} />, stat: "4763" }
  ];

  if (active) {
    return (
      <div className="overlay w-100 h-100 ">
        <Interactions interactions={interactions} visible={!active} />
        <BottomDrawer
          title={`${post.num_comments} comments`}
          active={commentsActive}
          setActive={setCommentsActive}
        >
          <Comments comments={post.comments} />
        </BottomDrawer>
        {post.type !== "TEXT" ? (
          <div className="overlay-title w-100 white">{post.title}</div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};

export default Overlay;
