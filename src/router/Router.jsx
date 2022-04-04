import React from "react"
import {Routes, Route } from "react-router-dom"
import MockMan from "mockman-js"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import HistoryPage from "../pages/HistoryPage"
import VideoListingPage from "../pages/VideoListingPage"
import WatchLaterPage from "../pages/WatchLaterPage"
import AuthPage from "../pages/AuthPage"
import LikedVideosPage from "../pages/LikedVideos"
import PlaylistPage from "../pages/PlaylistPage"


const Router = ()=>{
    return(
        <Routes>
            <Route  path="/mockman" element={<MockMan/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/explore" element={<VideoListingPage/>}/>
            <Route path="/playlist" element={<PlaylistPage/>}/>
            <Route path="/watchlater" element={<WatchLaterPage/>}/>
            <Route path="/liked" element={<LikedVideosPage/>}/>
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}
export default Router