import React from "react";
import "./Header.css";
import {
  KeyboardVoice,
  MenuOutlined,
  NotificationsNoneOutlined,
  PersonOffOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__icon">
          <MenuOutlined />
        </div>
        <img
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
          alt=""
        />
      </div>

      <div className="header__middle">
        <div className="header__search">
          <input placeholder="Search" type="text" />

          <Search className="searchicon" />
        </div>
        <div className="voiceIcon__container">
          <KeyboardVoice className="voiceIcon" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={VideoCallOutlined} />
        <HeaderOption Icon={NotificationsNoneOutlined} />
        <HeaderOption avatar={PersonOffOutlined} />
      </div>
    </div>
  );
}

export default Header;
