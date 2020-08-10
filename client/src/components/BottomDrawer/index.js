import React, { useState, useEffect } from "react";
import "./index.scss";
import { IoIosClose } from "react-icons/io";
import { Swipeable } from "react-swipeable";
import { CSSTransition, Transition } from "react-transition-group";

const BottomDrawer = ({ active, title, setActive, children }) => {
  const [isAtTop, setIsAtTop] = useState(false);
  const handleClose = () => {
    setActive(false);
  };

  return (
    <Swipeable
      trackMouse
    >
      <CSSTransition
        in={active}
        classNames="bottom-drawer"
        unmountOnExit
        timeout={200}
      >
        <div className="bottom-drawer">
          <div className="bottom-drawer-header">
            {title}
            <IoIosClose
              onClick={() => handleClose()}
              className="close"
              size={25}
            />
          </div>
          <div
            className="body"
            onScroll={e => {
              if (e.currentTarget.scrollTop > 5) {
                setIsAtTop(false);
              } else {
                setIsAtTop(true);
              }
            }}
          >
            {isAtTop}
            {children}
          </div>
        </div>
      </CSSTransition>
    </Swipeable>
  );
};

export default BottomDrawer;
