import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
import { useVideo } from "../context/VideoContext/VideoContext";

const LikedVideosPage = () => {
  const { videoState } = useVideo();
  const { likedVideos } = videoState;
  return (
    <div className="">
      <h2 className="m-2">Liked Videos <span className="fs-15">({likedVideos.length})</span></h2>
      {(likedVideos?.length === 0) ? (
        <h3 className="m-2">Do Like some videos 😥</h3>
      ) : (
        <ul>
          {likedVideos.map((videoDetails) => (
            <VideoCardHorizontal
              key={videoDetails.id}
              details={videoDetails}
              location={"LikedVideos"}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedVideosPage;
