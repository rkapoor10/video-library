import React from "react"
import VideoCard from "../components/cards/VideoCard";
import Filters from "../components/filters/Filters";
import { useFilter } from "../context/FilterContext/FilterContext";
import Modal from "../components/Modal/Modal";
import { usePlaylist } from "../context/PlaylistContext/PlaylistContext";
import PlaylistForm from "../components/playlists/playlistForms/PlaylistForm";



const VideoListingPage = () => {
  const {filteredData} = useFilter()
  const { openModal, setOpenModal,newVideo , setNewVideo } = usePlaylist();
  return (
    <div className="explore-page-wrapper">
      <Filters />
      <div className="grid-column-layout">
        {filteredData.map((videoDetails)=>
            <VideoCard key={videoDetails.id} details={videoDetails} setOpenModal={setOpenModal} setNewVideo={setNewVideo}/>
        )}
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} heading={"Select Playlist"}><PlaylistForm newVideo={newVideo}/></Modal>
    </div>
  );
};
export default VideoListingPage;
