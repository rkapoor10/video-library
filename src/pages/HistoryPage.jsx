import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
// import VideosContainer from "../components/videosContainer/VideosContainer";

const HistoryPage = () => {
  return (
    <div className="">
      <h2 className="m-2">Watch History</h2>
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

export default HistoryPage;
