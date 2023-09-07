import React from "react";
import "../styles/VidBox.css";
import { Avatar } from "@mui/material";
import { Circle } from "@mui/icons-material";

function VidBox({ avatar, title, subtitle, views, count, Icon, imgSrc }) {
  return (
    <div className="vidbox">
      <div className="container">
        <img src={imgSrc} alt="" />
      </div>
      <div className="below_container">
        {avatar && <Avatar className="vidbox__avatar" src={avatar} />}
        <div className="vidtext">
          <h1>{title}</h1>
          <div className="sub">
            <h3>{subtitle}</h3>
            {Icon && <Icon className="vidbox__icon" />}
          </div>
          <div className="latter">
            <p>
              {views}
              <Circle
                style={{
                  fontSize: 5,
                  marginBottom: 3,
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            </p>
            <p>{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VidBox;
