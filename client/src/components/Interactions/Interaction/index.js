import React from "react";
import "./index.scss";

const Interaction = ({ icon, text }) => {
  return (
    <div className="interaction white pb3 tc">
      <div className="w-35 h-35 tc">{icon}</div>
      <div className="text f6 tc">{text}</div>
    </div>
  );
};

export default Interaction;
