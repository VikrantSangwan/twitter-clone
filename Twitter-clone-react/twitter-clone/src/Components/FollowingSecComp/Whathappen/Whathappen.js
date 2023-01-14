import React from "react";
import "./Whathappen.css";

function whathappen(props) {
  console.log(props.item);
  return (
    <div className="feed">
      <div className="feed-desc">
        <p>{props.item.category}</p>
        <p className="hashtag">{props.item.hashtag}</p>
        <p>{props.item.tweetnum}</p>
      </div>
      <div className="feed-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
    </div>
  );
}

export default whathappen;
