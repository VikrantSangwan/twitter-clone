import "./App.css";
import React from "react";
import Menu from "./Components/Menu/Menu";
import Following from "./Components/Following/Following";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
    <div className="home">
      <div className="menu-width">
        <Menu />
      </div>
      <div className="posts-width">
        <Posts />
      </div>
      <div className="following-width">
        <Following />
      </div>
    </div>
  );
}

export default App;
