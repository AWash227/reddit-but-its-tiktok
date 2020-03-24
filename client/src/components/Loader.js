import React from "react";
import { Loader } from "react-loaders";

export const FullScreenLoader = ({ active }) => {
  if (active) {
    return (
      <div
        className="loader w-100 h-100"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Loader type="ball-scale-multiple" color="#19a974" active />
      </div>
    );
  }
  return null;
};
