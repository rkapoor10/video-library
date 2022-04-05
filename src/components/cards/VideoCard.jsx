import React from "react";
import "./videoCard.css";
import { MdWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <div className="video-card-wrapper ">
      <Link to="/player">
        <div className="parent-thumbnail img-wrapper">
          <img
            className="thumbnail-image"
            src="https://i.ytimg.com/vi/eyoDsR5FBHA/hq720_live.jpg?sqp=CPSbopIG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbvqZuH3oUWTVlwD8tXW9a6cMIgw"
            alt="thumbnail-image"
          />
          <div className="child-watchlater-btn on-thumbnail-btns fs-3" title="">
            {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
            <MdWatchLater />
          </div>
          <div className="child-playlist-btn on-thumbnail-btns fs-3" title="">
            {/* <span className="btns-extension fs-1r">Add to Playlist</span> */}
            <RiPlayList2Fill />
          </div>
          <div className="child-duration duration">12:42</div>
        </div>
      </Link>
      <div className="content-wrapper">
        <img
          className="avatar size-S profile-image"
          src="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
          alt="profile-image"
        />
        <div className="coloumn-flex title-container">
          <p className="video-main-title">
            what if the creator gives a long title in sense of getting more
            views
          </p>
          <p className="video-sub-title">Samay Raina</p>
          <p className="video-sub-title">2.8K views • 31 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
