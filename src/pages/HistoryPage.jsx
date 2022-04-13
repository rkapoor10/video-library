import React from "react";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
import { useVideo } from "../context/VideoContext/VideoContext";

const HistoryPage = () => {
  const { videoState } = useVideo();
  const { history } = videoState;
  return (
    <div className="">
      <h2 className="m-2">Watch History</h2>

      {history?.length === 0 ? (
        <h3 className="m-2">Go watch some videos</h3>
      ) : (
        <ul>
          {history.map((videoDetails) => (
            <VideoCardHorizontal
              key={videoDetails.id}
              details={videoDetails}
              location={"WatchHistory"}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPage;
