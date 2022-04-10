import React from "react"
import VideoCard from "../components/cards/VideoCard";
import Filters from "../components/filters/Filters";
import { useFilter } from "../context/FilterContext/FilterContext";

const VideoListingPage = () => {
  const {filteredData} = useFilter()
  return (
    <div className="explore-page-wrapper">
      <Filters />
      <div className="grid-column-layout">
        {filteredData.map((videoDetails)=>
            <VideoCard key={videoDetails.id} details={videoDetails}/>
        )}
      </div>
    </div>
  );
};
export default VideoListingPage;
