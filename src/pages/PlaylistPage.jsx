import React from "react"
import PlaylistContainer, { PlaylistCard } from "../components/playlists/Playlist"

const PlaylistPage = ()=>{
    return(
        <div>
            <h2  className="m-2">Your Playlists</h2>
            {/* <PlaylistCard/> */}
            <PlaylistContainer/>
        </div>
    )
}

export default PlaylistPage 