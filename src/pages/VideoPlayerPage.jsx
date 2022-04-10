import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import "./VideoPlayerPage.css";
import { useVideo } from "../context/VideoContext/VideoContext";
import findInVideos from "../utils/findInVideos";

const VideoPlayerPage = () => {
  const { playerId } = useParams();
  const { videosData } = useVideo();
  
  const { title, publishedDate, tags, statistics } = findInVideos(
    videosData,
    "channelId",
    playerId
  );
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
              <button className="like-btn" title="I like this">
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
