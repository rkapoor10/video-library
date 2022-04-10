import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
// import VideosContainer from "../components/videosContainer/VideosContainer";

const HistoryPage = () => {
  return (
    <div className="">
      <h2 className="m-2">Watch History</h2>
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      <VideoCardHorizontal location={"WatchHistory"} />
      {/* <VideosContainer/> */}
    </div>
  );
};

export default HistoryPage;
