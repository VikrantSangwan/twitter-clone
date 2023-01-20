import React from "react";

function Trending() {
  return (
    <div className="exploresubsectioncontainer">
      <div>
        <div className="exploretrend">Celebrities.Trending</div>
        <div className="explorehashtag">#SushantMoon</div>
        <div className="exploretweetcount">51.2k Tweets</div>
      </div>
      <div>
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
export default Trending;
