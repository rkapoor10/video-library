import React from "react"
import "./videosContainer.css"
import VideoCard from "../cards/VideoCard"

const VideosContainer = ()=>{
    return(
        <div className="videos-container">
            <div className="txt-m">Pass Props to get Heading</div>
            <div className="grid-column-layout">
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
                <VideoCard/>
            </div>
        </div>
    )
}


export default VideosContainer