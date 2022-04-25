import React from "react";
import "./videoCard.css";
import { MdWatchLater, MdClose } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useVideo } from "../../context/VideoContext/VideoContext";
import { usePlaylist } from "../../context/PlaylistContext/PlaylistContext";


const VideoCardHorizontal = ({details,location,playlistId,setOpenModal, setNewVideo}) => {
  const searchVideo = (arr, video) => arr.includes(video);
  const { videoState, videoDispatch } = useVideo();
  const {playlistDispatch} = usePlaylist()
  const {channelId, title, urls, creator, statistics,description } = details

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

  const handleAddToPlaylist = (event) => {
    event.stopPropagation();
    setOpenModal(true)
    setNewVideo(details)
  };

  const handleRemoveClick = (event) => {
    event.stopPropagation();
    toast.success(`Removed from ${location}`)
    switch(location){
      case "WatchHistory":
        videoDispatch({type:"REMOVE_FROM_HISTORY",payload:details})
        return
      case "WatchLater":
        videoDispatch({type:"REMOVE_FROM_WATCHLATER",payload:details})
        return
      case "LikedVideos":
        videoDispatch({type:"REMOVE_FROM_LIKED",payload:details})
        return
      case "Playlists":
        playlistDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: { id: playlistId, video: details },
        });
        return
      default:
        return
    }
    
  }

  return (
    <div className="horizontal-video-card-wrapper">
      <div className="parent-thumbnail img-wrapper">
      <Link to={`/player/${channelId}`}>
        <img
          className="horizontal-thumbnail-image "
          src={urls["thumbnail"]}
          alt="thumbnail"
        />
        </Link>

        {searchVideo(videoState["watchLaterVideos"], details) ? (
          <button
            className="horizontal-child-watchlater-btn on-thumbnail-btns fs-3 active-watchlater"
            title="add to WatchLater"
            onClick={handleAddToWatchLater}
          >
            {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
            <MdWatchLater />
          </button>
        ) : (
          <button
            className="horizontal-child-watchlater-btn on-thumbnail-btns fs-3"
            title="add to WatchLater"
            onClick={handleAddToWatchLater}
          >
            {/* <span className="btns-extension fs-1r">WatchLater</span>  */}
            <MdWatchLater />
          </button>
        )}
        <button
          className="horizontal-child-playlist-btn on-thumbnail-btns fs-3"
          title="add to playlist"
          onClick={(event)=>handleAddToPlaylist(event,details)}
        >
          <RiPlayList2Fill />
        </button>
        <div className="child-remove-btn on-thumbnail-btns" title="remove"
         onClick={handleRemoveClick}>
          <MdClose />
        </div>
      </div>
      <div className="content-wrapper  content-width">
        <div className="column-flex">
          <p className="horizontal-video-main-title">
          {title}
          </p>
          <p className="video-sub-title">{creator} • {statistics["viewCount"]}M views</p>
          <p className="video-sub-title">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardHorizontal;
