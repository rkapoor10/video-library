import React from "react"
import VideoCard from "../components/cards/VideoCard";
import Filters from "../components/filters/Filters";
import { useVideo } from "../context/VideoContext/VideoContext";

const VideoListingPage = () => {
    const {videosData} = useVideo()
  return (
    <div className="explore-page-wrapper">
      <Filters />
      <div className="grid-column-layout">
        {videosData.map((videoDetails)=>
            <VideoCard details={videoDetails}/>
        )}
      </div>
    </div>
  );
};
export default VideoListingPage;
