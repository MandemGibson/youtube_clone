import React from "react";
import "../src/styles/Header.css";
import {
  KeyboardVoice,
  MenuOutlined,
  NotificationsNoneOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import HeaderOption from "./components/HeaderOption";
import { IconButton, Tooltip } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuOutlined className="menuIcon" />
        </IconButton>

        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
          alt=""
        />
      </div>

      <div className="search__tray">
        <input placeholder="Search" />
        <div className="icon__side">
          <Search className="searchIcon" />
        </div>

        <div className="microphoneIcon__container">
          <IconButton>
            <KeyboardVoice className="microphoneIcon" />
          </IconButton>
        </div>
      </div>

      <div className="header__right">
        <Tooltip title="Create">
          <IconButton>
            <HeaderOption Icon={VideoCallOutlined} />
          </IconButton>
        </Tooltip>
        <IconButton>
          <HeaderOption Icon={NotificationsNoneOutlined} />
        </IconButton>
        <HeaderOption avatar />
      </div>
    </div>
  );
}

export default Header;
