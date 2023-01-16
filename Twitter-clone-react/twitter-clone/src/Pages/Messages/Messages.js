import React from "react";
import Following from "../../Components/Following/Following";
import Menu from "../../Components/Menu/Menu";
import ExistingConv from "../../Components/MenuComponents/MessagesSection/ExistingConv/ExistingConv";
import MessagesSection from "../../Components/MenuComponents/MessagesSection/MessagesSection";
import NewMessage from "../../Components/MenuComponents/MessagesSection/NewMessage/NewMessage";

function Messages() {
  return (
    <div className="home">
      <div style={{ width: "10%" }}>
        <Menu />
      </div>
      <div style={{ width: "20%" }}>
        <ExistingConv />
      </div>
      <div style={{ width: "30%" }}>
        <NewMessage />
      </div>
    </div>
  );
}

export default Messages;
