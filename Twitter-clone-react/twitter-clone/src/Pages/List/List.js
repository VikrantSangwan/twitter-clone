import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import ListSection from "../../Components/MenuComponents/ListSection/ListSection";

function List() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <ListSection />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default List;
