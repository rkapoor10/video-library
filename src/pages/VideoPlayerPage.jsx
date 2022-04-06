import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
// import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { RiPlayList2Fill } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import "./VideoPlayerPage.css";
const VideoPlayerPage = () => {
  const [searchParams]  = useSearchParams();
  console.log(searchParams.get('playerId'));
  return (
    <div className="">
      <h5>This is Single Video Player Page</h5>
      <div className="video-player-wrapper">
        {/* <VideoPlayer urlParam={playerId} /> */}
        <div className="content-wrapper-player">
          <p className="video-hashtags">#PlayBold #TeamIndia</p>
          <p className="video-title-large">
            Virat Kohli reminisces the famous World Cup 2011 win | RCB Bold
            Diaries
          </p>
          <div className="description-action">
            <span className="gray fs-1r">257,207 views • 2 Apr 2022</span>
            <div className="player-btns">
              <button className="like-btn" title="I like this">
                <AiFillLike /> COUNT
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
