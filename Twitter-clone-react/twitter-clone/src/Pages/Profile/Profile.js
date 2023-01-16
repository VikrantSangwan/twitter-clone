import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import ProfileSection from "../../Components/MenuComponents/ProfileSection/ProfileSection";

function Explore() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <ProfileSection />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default Explore;
