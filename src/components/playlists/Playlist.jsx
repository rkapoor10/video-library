import React from "react";
import { v4 as uuid } from "uuid";
import { usePlaylist } from "../../context/PlaylistContext/PlaylistContext";
import PlaylistCard from "./PlaylistCard";

const PlaylistContainer = () => {
  const {playlistState} = usePlaylist()
  return <div className="playlists-wrapper">
      <div className="grid-column-layout">
                {playlistState.map((playlist)=>{
                    return(
                        <li key={playlist.id} className="playlist-box">
                                <PlaylistCard playlist={playlist}/>
                        </li>
                    )
                })}
            </div>
  </div>;
};

// will add playlist UI also and export from here

export default PlaylistContainer ;
