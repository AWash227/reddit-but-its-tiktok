import React from "react";
import "./index.scss";
import { IoIos } from "react-icons/io";

const links = ["Following", <span className="white-50">|</span>, "For You"];
const Header = ({ handleFakeScroll }) => {
  return (
    <div className="header">
      <button
        style={{ position: "fixed", top: "5rem" }}
        onClick={handleFakeScroll}
      >
        Load next
      </button>
      {links.map((link, i) =>
        i === 2 ? (
          <div key={i} className="f6 b">
            {link}
          </div>
        ) : (
          <div key={i} className="f6">
            {link}
          </div>
        )
      )}
    </div>
  );
};

export default Header;
