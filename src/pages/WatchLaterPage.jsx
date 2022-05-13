import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
import { useVideo } from "../context/VideoContext/VideoContext";

const WatchLaterPage = () => {
  const { videoState } = useVideo();
  const { watchLaterVideos } = videoState;
  return (
    <div className="page-width">
      <h2 className="m-2">Watch Later <span className="fs-15">({watchLaterVideos.length})</span></h2>
      {watchLaterVideos?.length === 0 ? (
        <h3 className="m-2">You are all caught up 😊</h3>
      ) : (
        <ul>
          {watchLaterVideos.map((videoDetails) => 
            <VideoCardHorizontal key={videoDetails.id} details={videoDetails} location={"WatchLater"} />
          )}
        </ul>
      )}
    </div>
  );
};
export default WatchLaterPage;
