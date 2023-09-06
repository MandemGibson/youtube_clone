import React from "react";
import "../src/styles/App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import VideoFeed from "./VideoFeed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <div className="appbody__side">
          <SideBar />
        </div>
        <div className="appbody__vidfeed">
          <VideoFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
