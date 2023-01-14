import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import MoreSection from "../../Components/MenuComponents/MoreSection/MoreSection";

function More() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <MoreSection />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default More;
