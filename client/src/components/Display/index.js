import React, { useState, useEffect } from "react";
import "./index.scss";
import { IoIosHeart, IoIosChatbubbles, IoIosRedo } from "react-icons/io";
import { numToString } from "../../utils/PostUtils";
import Interactions from "../Interactions";
import { removeEncoding } from "../../utils/PostUtils";
import Overlay from "../Overlay";

const Display = ({ post, autoplay }) => {
  const [active, setActive] = useState(true);
  const interactions = [
    { icon: <IoIosHeart size={35} />, stat: numToString(post.score) },
    {
      icon: <IoIosChatbubbles size={35} />,
      stat: numToString(post.num_comments)
    },
    { icon: <IoIosRedo size={35} />, stat: "4763" }
  ];
  return (
    <div className="display bg-black" onClick={() => setActive(!active)}>
      <Overlay active={active} post={post} />
      <Interactions interactions={interactions} visible={!active} />
      <div
        className="display-bg "
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></div>
      <div className="display-img">
        <MediaDisplay
          type={post.type}
          src={post.media}
          thumbSrc={post.thumbnail}
          title={post.title}
          autoplay={autoplay}
        />
      </div>
    </div>
  );
};

const MediaDisplay = ({ type, src, thumbSrc, title, autoplay }) => {
  const [fullSrc, setFullSrc] = useState(thumbSrc);
  useEffect(() => {
    setFullSrc(thumbSrc);
    if (type === "IMAGE") {
      let image = new Image();
      image.src = src;
      // Ensure it is loading the correct image for the post
      if (image.src === src) {
        image.onload = () => setFullSrc(src);
      }
    }
  }, [src]);
  switch (type) {
    case "VIDEO":
      return (
        <video
          autoPlay={autoplay}
          src={src}
          width="100%"
          playsInline="playsinline"
          loop
        />
      );
    case "IMAGE":
      return (
        <img
          src={fullSrc}
          style={
            fullSrc === thumbSrc
              ? {
                  objectFit: "contain",
                  width: "100%",
                  height: "100%"
                }
              : {}
          }
        />
      );
    case "TEXT":
      return <p className="text  white">{removeEncoding(title)}</p>;
    default:
      return <p className="text white">{removeEncoding(title)}</p>;
  }
};

export default Display;
