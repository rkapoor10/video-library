import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
// import VideosContainer from "../components/videosContainer/VideosContainer";

const WatchLaterPage = () => {
  return (
    <div className="m-2">
      <h2 className="m-2">Watch Later</h2>
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      <VideoCardHorizontal location={"WatchLater"} />
      {/* <VideosContainer/> */}
    </div>
  );
};
export default WatchLaterPage;
