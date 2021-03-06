import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import "./VideoPlayerPage.css";
import { useVideo } from "../context/VideoContext/VideoContext";
import findInVideos from "../utils/findInVideos";
import { toast } from "react-toastify";

const VideoPlayerPage = () => {
  const { playerId } = useParams();
  const { videosData, videoState, videoDispatch } = useVideo();
  const searchVideo = (arr, video) => arr.includes(video);
  const details = findInVideos(videosData, "channelId", playerId);

  useEffect(
    () => !searchVideo(videoState["history"],details) && videoDispatch({ type: "ADD_TO_HISTORY", payload: details }),
    []
  );
  const { title, publishedDate, tags, statistics } = details;
  return (
    <div className="m-2">
      <div className="video-player-wrapper">
        <VideoPlayer urlParam={playerId} />
        <div className="content-wrapper-player">
          <p className="video-hashtags">{tags.map((tag) => `#${tag} `)}</p>
          <p className="video-title-large">{title}</p>
          <div className="description-action">
            <span className="gray fs-1r">
              {statistics["viewCount"]}M views • {publishedDate}
            </span>
            <div className="player-btns">
              <button
                className={`like-btn ${searchVideo(videoState["likedVideos"],details) && "active-btn"}`}
                title="I like this"
                onClick={() => {
                  if(searchVideo(videoState["likedVideos"],details))
                  {
                    videoDispatch({ type: "REMOVE_FROM_LIKED", payload: details });
                    toast.success("Removed from liked videos");
                  }
                  else{
                    videoDispatch({ type: "LIKED_VIDEO", payload: details });
                    toast.success("Added to liked videos");
                  }
                  
                }}
              >
                <AiFillLike /> {statistics["likeCount"]}K
              </button>
              <button className="save-btn" title="save to playlist">
                <RiPlayList2Fill /> SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
