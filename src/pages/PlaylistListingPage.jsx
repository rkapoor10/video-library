import { useParams } from "react-router-dom";
import { usePlaylist } from "../context/PlaylistContext/PlaylistContext";
import VideoCardHorizontal from "../components/cards/VideoCardHorizontal";
import findInVideos from "../utils/findInVideos";



const PlaylistListingPage = () => {
  const { playlistId } = useParams();
  const {playlistState} = usePlaylist()
  const playlist  = findInVideos(playlistState,"id", playlistId)
  const {id, title, channelName, visibility, videos} = playlist
  return (
    <div className="m-2">
      <h2 className="m-2">
        Playlist : {title} <span className="fs-15">({videos.length})</span>
      </h2>
      <h3>{channelName} | {visibility}</h3> 
      {videos?.length === 0 ? (
        <h3 className="m-2">Add some videos to this playlist...😊</h3>
      ) : (
        <ul>
          {videos.map((videoDetails) => (
            <VideoCardHorizontal
              key={videoDetails.id}
              details={videoDetails}
              location={"WatchLater"}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistListingPage;
