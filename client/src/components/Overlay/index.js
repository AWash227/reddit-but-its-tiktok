import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./index.scss";
import { numToString } from "../../utils/PostUtils";

const Overlay = ({ post, active }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  if (active) {
    return (
      <div className="overlay w-100 h-100 ">
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
