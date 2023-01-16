import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import MessagesSection from "../../Components/MenuComponents/MessagesSection/MessagesSection";

function Messages() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <MessagesSection />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default Messages;
