import React from "react";
import "../src/styles/App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import VideoFeed from "./VideoFeed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
