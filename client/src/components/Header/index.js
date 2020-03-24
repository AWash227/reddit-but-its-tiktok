import React, { useState } from "react";
import "./index.scss";
import { connect } from "react-redux";
import { setSubreddit } from "../../actions/postsActions";

const Header = ({ subreddit, setSubreddit, fetchPosts }) => {
  const links = [
    "Following",
    <span className="white-50">|</span>,
    `/r/${subreddit}`
  ];
  const [sub, setSub] = useState("");
  return (
    <div className="header">
      <div className="header mb2">
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
      <form
        onSubmit={e => {
          e.preventDefault();
          setSubreddit(sub);
        }}
      >
        <input
          className="mt4 br4 bn black ph2 pv1"
          type="text"
          prefix="/r/"
          value={sub}
          placeholder="subreddit"
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setSubreddit(sub);
              fetchPosts(subreddit);
            }
          }}
          onChange={e => setSub(e.target.value)}
        />
      </form>
    </div>
  );
};

export default connect(null, { setSubreddit })(Header);
