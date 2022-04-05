import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
// import VideosContainer from "../components/videosContainer/VideosContainer";

const LikedVideosPage = () => {
  return (
    <div className="">
      <h2 className="m-2">Liked Videos</h2>
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      <VideoCardHorizontal />
      {/* <VideosContainer/> */}
    </div>
  );
};

export default LikedVideosPage;
