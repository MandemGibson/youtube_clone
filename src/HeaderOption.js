import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOptions.css";

function HeaderOption({ Icon, avatar }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icons" />}
      {avatar && <Avatar className="headerOption__profile" />}
    </div>
  );
}

export default HeaderOption;
