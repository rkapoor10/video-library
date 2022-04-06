import React from "react";
import "./videoCard.css";
import { MdWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const VideoCard = ({details}) => {
  const handleAddToWatchLater = (event) => {
    event.stopPropagation();
    console.log("clicked add to watchlater");
  };

  const handleAddToPlaylist = (event) => {
    event.stopPropagation();
    console.log("clicked add to playlist");
  };

  console.log({details})

  const {channelId, title, urls, publishedDate, description, creator, duration, tags, statistics } = details

  return (
    <div className="video-card-wrapper ">
      <div className="parent-thumbnail img-wrapper">
        <Link to={`/player?playerId=${channelId}`}>
          <img
            className="thumbnail-image"
            src={urls["thumbnail"]}
            alt="thumbnail-image"
          />
        </Link>
        <button
          className="child-watchlater-btn on-thumbnail-btns fs-3"
          title="add to WatchLater"
          onClick={handleAddToWatchLater}
        >
          {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
          <MdWatchLater />
        </button>
        <button
          className="child-playlist-btn on-thumbnail-btns fs-3"
          title="add to Playlist"
          onClick={handleAddToPlaylist}
        >
          {/* <span className="btns-extension fs-1r">Add to Playlist</span> */}
          <RiPlayList2Fill />
        </button>
        <div className="child-duration duration">{duration}</div>
      </div>

      <div className="content-wrapper">
        <img
          className="avatar size-S profile-image"
          src="./assets/playdesk-logo.png"
          alt="profile-image"
        />
        <div className="coloumn-flex title-container">
          <p className="video-main-title">
            {title}
          </p>
          <p className="video-sub-title">{creator}</p>
          <p className="video-sub-title">{statistics["viewCount"]}M views • {statistics["likeCount"]}K likes</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
