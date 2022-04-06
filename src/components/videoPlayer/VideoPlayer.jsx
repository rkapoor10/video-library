import React from "react"
import ReactPlayer from "react-player"
import "./videoPlayer.css"

const VideoPlayer = ({urlParam})=>{
    
    return(
        <ReactPlayer url={`https://youtu.be/${urlParam}`} className="video-player" width="100%" height="100%" controls/>
    )
}

export default VideoPlayer