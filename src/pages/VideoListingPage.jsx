import react from "react";
import VideoCard from "../components/cards/VideoCard";
import Filters from "../components/filters/Filters";

const VideoListingPage = () => {
  return (
    <div className="explore-page-wrapper">
      <h5>This is video Listing Page</h5>
      <Filters />
      <div className="grid-column-layout">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};
export default VideoListingPage;
