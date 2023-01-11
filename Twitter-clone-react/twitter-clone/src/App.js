import "./App.css";
import React from "react";
import Menu from "./Components/Menu/Menu";
import Following from "./Components/Following/Following";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
    <div className="row home">
      <div className="col-3">
        <Menu />
      </div>
      <div className="col-6">
        <Posts />
      </div>
      <div className="col-3">
        <Following />
      </div>
    </div>
  );
}

export default App;
