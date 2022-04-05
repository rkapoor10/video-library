import React from "react"
import ReactPlayer from "react-player"
import "./videoPlayer.css"

const VideoPlayer = ()=>{
    return(
        <ReactPlayer url="https://youtu.be/3Cs9gQJxsPg"className="video-player" width="100%" height="100%" controls/>
    )
}

export default VideoPlayer