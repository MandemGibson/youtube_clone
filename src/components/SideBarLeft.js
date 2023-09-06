import React from "react";
import "../styles/SideBarLeft.css";
import { Avatar } from "@mui/material";

function SideBarLeft({ avatar, Icon, title, selected }) {
  return (
    <div className={`sidebar__left ${selected && "sidebar__left--active"}`}>
      {Icon && <Icon className="sidebar__icons" />}
      {avatar && <Avatar className="sidebar__avatar" />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarLeft;
