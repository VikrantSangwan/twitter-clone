import React from "react";
import Menu from "../../Components/Menu/Menu";
import ExistingConv from "../../Components/MenuComponents/MessagesSection/ExistingConv/ExistingConv";
import NewMessage from "../../Components/MenuComponents/MessagesSection/NewMessage/NewMessage";
import "./Messages.css";

function Messages() {
  return (
    <div className="home">
      <div className="msgcontainer-1">
        <Menu />
      </div>
      <div className="msgcontainer-2">
        <ExistingConv />
      </div>
      <div className="msgcontainer-3">
        <NewMessage />
      </div>
    </div>
  );
}

export default Messages;
