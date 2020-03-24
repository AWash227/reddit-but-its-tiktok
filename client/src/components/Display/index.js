import React from "react";
import "./index.scss";

const Display = ({ post, autoplay }) => {
  return (
    <div className="display bg-black w-100 h-100">
      <div
        className="display-bg w-100 h-100"
        style={{ backgroundImage: `url(${post.thumbnail})` }}
      ></div>
      <div className="display-img w-100 h-100">
        <MediaDisplay
          type={post.type}
          src={post.media}
          title={post.title}
          autoplay={autoplay}
        />
      </div>
    </div>
  );
};

const MediaDisplay = ({ type, src, title, autoplay }) => {
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
      return <img src={src} />;
    case "TEXT":
      return <p className="white">{title}</p>;
    default:
      return <p className="white">{title}</p>;
  }
};

export default Display;
