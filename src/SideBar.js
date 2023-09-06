import React from "react";
import SideBarLeft from "./components/SideBarLeft";
import "../src/styles/SideBar.css";
import {
  ExpandMore,
  FeedbackOutlined,
  FlagOutlined,
  HelpOutline,
  History,
  HomeOutlined,
  MusicNoteOutlined,
  PlayCircleOutline,
  SettingsOutlined,
  SlideshowOutlined,
  SmartDisplay,
  SportsEsportsOutlined,
  SportsGolfOutlined,
  SubscriptionsOutlined,
  ThumbUpOutlined,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotOutlined,
  YouTube,
} from "@mui/icons-material";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <SideBarLeft Icon={HomeOutlined} title="Home" selected={true} />
        <SideBarLeft Icon={PlayCircleOutline} title="Shorts" />
        <SideBarLeft Icon={SubscriptionsOutlined} title="Subscriptions" />
        <div className="space"></div>
        <SideBarLeft Icon={VideoLibraryOutlined} title="Library" />
        <SideBarLeft Icon={History} title="History" />
        <SideBarLeft Icon={SlideshowOutlined} title="Your videos" />
        <SideBarLeft Icon={WatchLaterOutlined} title="Watch later" />
        <SideBarLeft Icon={ThumbUpOutlined} title="Liked videos" />
        <SideBarLeft Icon={ExpandMore} title="Show more" />
      </div>

      <div className="sidebar__options">
        <h4>Subscriptions</h4>
        <SideBarLeft avatar title="freeCodeCamp.org" />
        <SideBarLeft avatar title="freeCodeCamp.org" />
        <SideBarLeft avatar title="freeCodeCamp.org" />
        <SideBarLeft avatar title="freeCodeCamp.org" />
        <SideBarLeft avatar title="freeCodeCamp.org" />
        <SideBarLeft Icon={ExpandMore} title="Show more" />
      </div>

      <div className="sidebar__options">
        <h4>Explore</h4>
        <SideBarLeft Icon={WhatshotOutlined} title="Trending" />
        <SideBarLeft Icon={MusicNoteOutlined} title="Music" />
        <SideBarLeft Icon={SportsEsportsOutlined} title="Gaming" />
        <SideBarLeft Icon={SportsGolfOutlined} title="Sports" />
      </div>

      <div className="sidebar__options">
        <h4>More from YouTube</h4>
        <SideBarLeft Icon={SmartDisplay} title="YouTube Studio" />
        <SideBarLeft Icon={YouTube} title="YouTube Kids" />
      </div>

      <div className="sidebar__options">
        <SideBarLeft Icon={SettingsOutlined} title="Settings" />
        <SideBarLeft Icon={FlagOutlined} title="Report history" />
        <SideBarLeft Icon={HelpOutline} title="Help" />
        <SideBarLeft Icon={FeedbackOutlined} title="Send feedback" />
      </div>

      <div className="sidebar__footer">
        <div className="footer__text">
          <h5>About</h5>
          <h5>Press</h5>
          <h5>Copyright</h5>
          <h5>Contact us</h5>
          <h5>Creators</h5>
          <h5>Advertise</h5>
          <h5>Developers</h5>
        </div>

        <div className="footer__text">
          <h5>Terms</h5>
          <h5>Privacy</h5>
          <h5>Policy & Safety</h5>
          <h5>How YouTube works</h5>
          <h5>Test new features</h5>
        </div>

        <div className="footer__last">
          <p>© 2023 Google LLC</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
