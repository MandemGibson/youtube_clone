import React from "react";
import "../src/styles/VideoFeed.css";
import SuggestionBox from "./components/SuggestionBox";
import { ArrowForwardIos, Verified } from "@mui/icons-material";
import VidBox from "./components/VidBox";
import { IconButton } from "@mui/material";
import img1 from "../src/images/profile.jpg";

function VideoFeed() {
  return (
    <div className="videoFeed">
      <div className="suggestionBox__side">
        <div className="suggestions">
          <SuggestionBox suggestion="All" selected={true} />
          <SuggestionBox suggestion="Flutter" />
          <SuggestionBox suggestion="React Js" />
          <SuggestionBox suggestion="Terateck" />
          <SuggestionBox suggestion="Recently Played" />
        </div>
        <div className="suggestions__more">
          <IconButton>
            <ArrowForwardIos
              style={{
                fontSize: 15,
              }}
            />
          </IconButton>
        </div>
      </div>
      <div className="videos">
        <VidBox
          avatar={img1}
          title="Family Guy full episodes"
          subtitle="GibbyTV📺"
          Icon={Verified}
          views="987K views"
          count="2 years ago"
          imgSrc={
            "https://th.bing.com/th/id/R.66b824061f0e3380f37e5a43f7a881d2?rik=46j6N9jNEyUA5w&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f40700000%2fFamily-Guy-family-guy-40727719-1280-1024.jpg&ehk=RSm8FHZUwjjV656JJneB8E2CkcYANHUpPWRo88Ee8i0%3d&risl=&pid=ImgRaw&r=0"
          }
        />
        <VidBox
          avatar="https://th.bing.com/th/id/OIP.BB_zUFkR9b9VL_gOMVHISwHaHa?pid=ImgDet&rs=1"
          title="React JS tutorials for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
          imgSrc={img1}
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
        <VidBox
          avatar
          title="Learning REACT JS for Beginners"
          subtitle="Mandem Gibson"
          Icon={Verified}
          views="1M views"
          count="1 hour ago"
        />
      </div>
    </div>
  );
}

export default VideoFeed;
