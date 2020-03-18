import React from "react";
import "./index.scss";

const Display = ({ img }) => {
  return (
    <div className="display bg-black w-100 h-100 ">
      <div
        className="display-bg w-100 h-100"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="display-img w-100 h-100">
        <img src={img} />
      </div>
    </div>
  );
};

export default Display;
