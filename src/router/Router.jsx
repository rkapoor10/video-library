import React from "react"
import {Routes, Route } from "react-router-dom"
import MockMan from "mockman-js"
import HomePage from "../pages/HomePage"
import ErrorPage from "../pages/ErrorPage"
import HistoryPage from "../pages/HistoryPage"
import VideoListingPage from "../pages/VideoListingPage"
import WatchLaterPage from "../pages/WatchLaterPage"
import AuthPage from "../pages/AuthPage"


const Router = ()=>{
    return(
        <Routes>
            <Route  path="/mockman" element={<MockMan/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/explore" element={<VideoListingPage/>}/>
            {/* what will be better path for watch later ? */}
            <Route path="/watchlater" element={<WatchLaterPage/>}/>
            <Route path="/auth" element={<AuthPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}
export default Router