import react from "react";
import BannerImage from "../components/banner/Banner";
import VideosContainer from "../components/videosContainer/VideosContainer";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <BannerImage />

      {/* trending videos  */}
      <VideosContainer heading={"Trending"} />

      {/* must watch videos */}
      <VideosContainer heading={"Must Watch"} />

      {/* watch again */}
      <VideosContainer heading={"Matches"} />
    </div>
  );
};

export default HomePage;
