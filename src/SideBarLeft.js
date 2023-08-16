import React from "react";
import "./SideBarLeft.css";

function SideBar_Left({ Icon, title }) {
  return (
    <div className="sidebar__left">
      {Icon && <Icon className="sidebar__icons" />}
      <h3>{title}</h3>
    </div>
  );
}

export default SideBar_Left;
