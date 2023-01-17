import React from "react";
import "./BookmarkSection.css";

function BookmarkSection() {
  return (
    <div className="bookmarkcontainer">
      <div className="bookmarktopcont">
        <div>
          <p> Bookmarks</p>
          <p>@Vikrant51113416</p>
        </div>
      </div>
      <div className="bookmarkmaincont">
        <div>
          <div className="notweetimg">
            <img
              src="https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-400x200.v1.366bcfc9.png"
              alt=""
            />
          </div>
          <div className="notweetmsg">
            <h2>Save Tweets for later</h2>
            <p>
              Don't let the good ones fly away! Bookmark Tweets to easily find
              them again in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkSection;
