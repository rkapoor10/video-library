import React from "react";
import "./videosContainer.css";
import VideoCard from "../cards/VideoCard";

const VideosContainer = ({ heading, videosData }) => {
  return (
    <div className="videos-container">
      <div className="txt-m">{heading}</div>
      <div className="grid-column-layout">
        {videosData.map((videoDetails) => (
          <VideoCard key={videoDetails.id} details={videoDetails} />
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
