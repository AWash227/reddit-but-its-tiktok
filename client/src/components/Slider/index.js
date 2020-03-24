import React from "react";
import { Swipeable } from "react-swipeable";
import "./index.scss";

const Slider = ({ handleSwipeDown, handleSwipeUp, children }) => {
  return (
    <Swipeable
      onSwipedDown={() => handleSwipeDown()}
      onSwipedUp={() => handleSwipeUp()}
      trackMouse
      className="slider w-100 h-100"
    >
      {children}
    </Swipeable>
  );
};

export default Slider;
