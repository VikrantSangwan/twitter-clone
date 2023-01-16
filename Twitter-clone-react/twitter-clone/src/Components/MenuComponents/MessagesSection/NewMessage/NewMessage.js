import React from "react";
import "./NewMessage.css";

function NewMessage() {
  return (
    <div className="newmsgcontainer">
      <div className="minicontainer">
        <div className="writeamsgcontainer">
          <p style={{ fontSize: "32px", fontWeight: "700" }}>
            Select a message
          </p>
          <p style={{ fontSize: "15px", color: "#71767B" }}>
            Choose from your existing conversations, start a new one, or just
            keep swimming.
          </p>
          <button className="writeamsg">New message</button>
        </div>
      </div>
    </div>
  );
}

export default NewMessage;
