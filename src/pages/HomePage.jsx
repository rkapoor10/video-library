import react from "react";
import BannerImage from "../components/banner/Banner";
import VideosContainer from "../components/videosContainer/VideosContainer";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <h5>This is home page</h5>
      <BannerImage />
      {/* trending videos  */}
      <VideosContainer/>
      {/* must watch videos */}
      <VideosContainer/>
      {/* watch again */}
      <VideosContainer/>
    </div>
  );
};

export default HomePage;
