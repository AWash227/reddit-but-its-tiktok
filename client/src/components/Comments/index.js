import React, { useState } from "react";
import "./index.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getChildren } from "../../utils/PostUtils";

const COLOR_SCHEME = ["#1fab89", "#62d2a2", "#9df3c4", "#d7fbe8"];
const COLOR_SCHEME_ALT = ["#fffcca", "#55e9bc", "#11d3bc", "#537780"];
const COLOR_SCHEME_ALT_2 = ["#394a6d", "#3c9d9b", "#52de97", "#c0ffb3"];

const Comment = ({ text, score, comments, colorScheme, author, depth = 0 }) => {
  const [collapsed, setCollapsed] = useState(depth % 3 === 0 ? false : true);
  const [bodyCollapsed, setBodyCollapsed] = useState(true);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className="comment-thread"
      style={{ borderLeft: `2px solid ${colorScheme[depth]}` }}
    >
      <div className="comment">
        <div className="comment-header" onClick={() => handleCollapse()}>
          <span className="comment-collapse" onClick={() => handleCollapse()}>
            {collapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
          <span className="comment-author">{author}</span>{" "}
          <span className="comment-score">{score} points</span>
          {collapsed && comments ? (
            comments.length === 0 ? null : (
              <span className="comments">{`${comments.length} ${
                comments.length === 1 ? "comment" : "comments"
              }`}</span>
            )
          ) : null}
        </div>
        {!collapsed ? (
          <div className="comment-body">
            <p onClick={() => setBodyCollapsed(!bodyCollapsed)}>
              {bodyCollapsed && text ? text.slice(0, 256) + "..." : text}
            </p>
            {comments
              ? comments.map(comment => (
                  <Comment
                    key={comment.id}
                    id={comment.id}
                    score={comment.score}
                    text={comment.body}
                    author={comment.author}
                    comments={
                      comment.replies
                        ? comment.replies.data.children.map(child => child.data)
                        : []
                    }
                    colorScheme={colorScheme}
                    depth={depth < colorScheme.length - 1 ? depth + 1 : 0}
                  />
                ))
              : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Comments = ({ comments }) => {
  return comments ? (
    <div className="comments">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          id={comment.id}
          text={comment.body}
          score={comment.score}
          author={comment.author}
          comments={
            comment.replies
              ? comment.replies.data.children.map(child => child.data)
              : []
          }
          colorScheme={COLOR_SCHEME}
        />
      ))}
    </div>
  ) : null;
};

export default Comments;

