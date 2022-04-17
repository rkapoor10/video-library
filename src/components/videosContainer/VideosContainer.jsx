import React from "react";
import "./videosContainer.css";
import VideoCard from "../cards/VideoCard";
import { useVideo } from "../../context/VideoContext/VideoContext";
import Modal from "../Modal/Modal";
import { usePlaylist } from "../../context/PlaylistContext/PlaylistContext";
import PlaylistForm from "../playlists/playlistForms/PlaylistForm";


const VideosContainer = ({ heading }) => {
  const { videosData } = useVideo();
  const { openModal, setOpenModal,newVideo , setNewVideo } = usePlaylist();


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
          <VideoCard key={videoDetails.id} details={videoDetails} setOpenModal={setOpenModal} setNewVideo={setNewVideo}/>
        ))}
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} heading={"Select Playlist"} ><PlaylistForm newVideo={newVideo}/></Modal>
    </div>
  );
};

export default VideosContainer;
