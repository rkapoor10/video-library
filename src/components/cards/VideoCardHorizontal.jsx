import React from "react";
import "./videoCard.css";
import { MdWatchLater, MdClose } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";

const VideoCardHorizontal = () => {
  return (
    <div className="horizontal-video-card-wrapper">
      <div className="parent-thumbnail img-wrapper">
        <img
          className="horizontal-thumbnail-image "
          src="https://i.ytimg.com/vi/eyoDsR5FBHA/hq720_live.jpg?sqp=CPSbopIG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbvqZuH3oUWTVlwD8tXW9a6cMIgw"
          alt="thumbnail-image"
        />
        <div
          className="horizontal-child-watchlater-btn on-thumbnail-btns fs-3"
          title="watch later"
        >
          <MdWatchLater />
        </div>
        <div
          className="horizontal-child-playlist-btn on-thumbnail-btns fs-3"
          title="add to playlist"
        >
          <RiPlayList2Fill />
        </div>
        <div className="child-remove-btn on-thumbnail-btns" title="remove">
          <MdClose />
        </div>
      </div>
      <div className="content-wrapper  content-width">
        <div className="column-flex">
          <p className="horizontal-video-main-title">
            what if the creator gives a long title in sense of getting more
            views
          </p>

          <p className="video-sub-title">Samay Raina • 2.8K views</p>
          <p className="video-sub-title">
            vIDEO DESCRIPTION Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Tempora, nesciunt, ipsam dolores sunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardHorizontal;
