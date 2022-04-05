import React from "react";
import PlaylistCard from "./PlaylistCard";

const PlaylistContainer = () => {
  const demoPlaylist = [
    "Playlist 1",
    "Playlist 2",
    "Playlist 3",
    "Playlist 4",
    "Playlist 5",
    "Playlist 6",
    "Playlist 7",
  ];
  return <div className="playlists-wrapper">
      <div className="grid-column-layout">
                {demoPlaylist.map((playlist)=>{
                    return(
                        <li className="playlist-box" key={playlist}>
                                <PlaylistCard/>
                        </li>
                    )
                })}
            </div>
  </div>;
};

// will add playlist UI also and export from here

export default PlaylistContainer ;
