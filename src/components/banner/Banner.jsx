import React from "react"
import "./banner.css"

const BannerImage = () => {
    return(
        <div className="banner-image parent-cta">
            <img src="./assets/banner-2.png" alt="banner image" />
            <button className="btn btn-padding txt-s btn-solid white login-btn bg-basered btn-styles child-cta">Streaming LIVE</button>
        </div>
    )
}   

export default BannerImage