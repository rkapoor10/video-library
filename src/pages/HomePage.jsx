import react from "react";
import BannerImage from "../components/banner/Banner";
import VideosContainer from "../components/videosContainer/VideosContainer";
import { useVideo } from "../context/VideoContext/VideoContext";

const HomePage = () => {
  const {videosData} = useVideo()
  return (
    <div className="homepage-wrapper">
      <h5>This is home page</h5>
      <BannerImage />
      {/* trending videos  */}
      {/* <VideosContainer heading={"Trending Videos"} videosData={filterInVideos(videosData,)} /> */}
      {/* this won't work instead use dispatcher from filters */}
      {/* must watch videos */}
      <VideosContainer/>
      {/* watch again */}
      <VideosContainer/>
    </div>
  );
};

export default HomePage;
