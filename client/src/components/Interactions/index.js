import React from "react";
import "./index.scss";
import Interaction from "./Interaction";

const Interactions = ({ interactions }) => {
  return (
    <div className="interactions">
      {interactions.map((interaction, i) => (
        <Interaction
          key={i}
          icon={interaction.icon}
          text={interaction.stat}
          onClick={interaction.onClick}
        />
      ))}
    </div>
  );
};

export default Interactions;
