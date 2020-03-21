import React from "react";
import "./index.scss";
import { useSwipeable, Swipeable } from "react-swipeable";
import { CSSTransition } from "react-transition-group";

const Display = ({
  post,
  onSwipedDown,
  onSwipedUp,
  x,
  y,
  transition,
  autoplay
}) => {
  const handlers = useSwipeable({
    onSwipedUp: () => onSwipedDown(),
    onSwipedDown: () => onSwipedUp(),
    preventDefaultTouchMoveEvent: true,
    trackMouse: true
  });
  return (
    <CSSTransition in={transition} timeout={200} classNames="slideUp" appear>
      <div
        {...handlers}
        className="display bg-black w-100 h-100"
        style={{ top: y, left: 0 }}
      >
        <div
          className="display-bg w-100 h-100"
          style={{ backgroundImage: `url(${post.thumb})` }}
        ></div>
        <div className="display-img w-100 h-100">
          {post.type === "VIDEO" ? (
            <video
              autoPlay={autoplay || true}
              src={post.image}
              width={"100%"}
              playsInline="playsinline"
              loop
            />
          ) : post.type === "TEXT" ? (
            <p className="white">{post.title}</p>
          ) : (
            <img src={post.image || post.thumb} />
          )}
        </div>
        {post.type !== "TEXT" ? (
          <div className="display-title w-100 h-100">{post.title}</div>
        ) : null}
      </div>
    </CSSTransition>
  );
};

export default Display;
