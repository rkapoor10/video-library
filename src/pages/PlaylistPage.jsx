import React from "react"
import PlaylistContainer, { PlaylistCard } from "../components/playlists/Playlist"

const PlaylistPage = ()=>{
    return(
        <div className="page-width">
            <h2  className="m-2">Your Playlists</h2>
            <PlaylistContainer/>
        </div>
    )
}

export default PlaylistPage 