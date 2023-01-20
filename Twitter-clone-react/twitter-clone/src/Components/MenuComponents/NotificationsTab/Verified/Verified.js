import React from "react";

function Verified() {
  return (
    <div className="allcontainer">
      <div className="allsubcont">
        <img
          src="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
          alt=""
        />
        <p className="titlenotificationlist">Nothing to see here — yet</p>
        <p className="descnotificationlist">
          Likes, mentions, Retweets, and a whole lot more — when it comes from a
          verified account, you'll find it here.{" "}
          <span>
            <a href="">Learn more</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Verified;
