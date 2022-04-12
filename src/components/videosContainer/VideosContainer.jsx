import React from "react";
import "./videosContainer.css";
import VideoCard from "../cards/VideoCard";
import { useVideo } from "../../context/VideoContext/VideoContext";

const VideosContainer = ({ heading }) => {
  const { videosData } = useVideo();
  console.log(videosData);
  const filterVideos = (heading) => {
    return videosData.filter((video) =>
      video.tags.some((tag) => tag === heading)
    );
  };
  const filteredVideos = filterVideos(heading);

  return (
    <div className="videos-container">
      <div className="txt-m">{heading} Videos</div>
      <div className="grid-column-layout">
        {filteredVideos.map((videoDetails) => (
          <VideoCard key={videoDetails.id} details={videoDetails} />
        ))}
      </div>
    </div>
  );
};

export default VideosContainer;
