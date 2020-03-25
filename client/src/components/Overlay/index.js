import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import Interactions from "../Interactions";
import { numToString } from "../../utils/PostUtils";
import { IoIosHeart, IoIosChatbubbles, IoIosRedo } from "react-icons/io";

const Overlay = ({ post, active }) => {
  const [inProp, setInProp] = useState(false);
  const interactions = [
    { icon: <IoIosHeart size={35} />, stat: numToString(post.score) },
    {
      icon: <IoIosChatbubbles size={35} />,
      stat: numToString(post.num_comments)
    },
    { icon: <IoIosRedo size={35} />, stat: "4763" }
  ];

  useEffect(() => {
    setInProp(true);
  }, []);

  if (active) {
    return (
      <div className="overlay w-100 h-100 ">
        <Interactions interactions={interactions} />
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
