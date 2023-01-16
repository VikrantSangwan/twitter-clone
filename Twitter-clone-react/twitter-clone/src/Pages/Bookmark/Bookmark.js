import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import BookmarkSection from "../../Components/MenuComponents/BookmarkSection/BookmarkSection";

function Explore() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <BookmarkSection />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default Explore;
