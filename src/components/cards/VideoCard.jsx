import React from "react";
import "./videoCard.css";
import { MdWatchLater } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useVideo } from "../../context/VideoContext/VideoContext";

const VideoCard = ({ details, setOpenModal, setNewVideo }) => {
  const searchVideo = (arr, video) => arr.includes(video);
  const { videoState, videoDispatch } = useVideo();
  const handleAddToWatchLater = (event) => {
    event.stopPropagation();
    if (searchVideo(videoState["watchLaterVideos"], details)) {
      videoDispatch({ type: "REMOVE_FROM_WATCHLATER", payload: details });
      toast.success("Removed from Watch Later");
    } else {
      videoDispatch({ type: "ADD_TO_WATCHLATER", payload: details });
      toast.success("Added to Watch Later");
    }
  };

  const handleAddToPlaylist = (event, details) => {
    event.stopPropagation();
    setOpenModal(true);
    setNewVideo(details);
  };

  const { channelId, title, urls, creator, duration, statistics } = details;

  return (
    <div className="video-card-wrapper ">
      <div className="parent-thumbnail img-wrapper">
        <Link to={`/player/${channelId}`}>
          <img
            className="thumbnail-image"
            src={urls["thumbnail"]}
            alt="thumbnail"
          />
        </Link>

        {searchVideo(videoState["watchLaterVideos"], details) ? (
          <button
            className="child-watchlater-btn on-thumbnail-btns fs-3 active-watchlater"
            title="add to WatchLater"
            onClick={handleAddToWatchLater}
          >
            {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
            <MdWatchLater />
          </button>
        ) : (
          <button
            className="child-watchlater-btn on-thumbnail-btns fs-3"
            title="add to WatchLater"
            onClick={handleAddToWatchLater}
          >
            {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
            <MdWatchLater />
          </button>
        )}

        <button
          className="child-playlist-btn on-thumbnail-btns fs-3"
          title="add to Playlist"
          onClick={(event) => handleAddToPlaylist(event, details)}
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
          alt="profile"
        />
        <div className="coloumn-flex title-container">
          <p className="video-main-title">{title}</p>
          <p className="video-sub-title">{creator}</p>
          <p className="video-sub-title">
            {statistics["viewCount"]}M views ??? {statistics["likeCount"]}K likes
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
