import React from "react";
import { Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import HistoryPage from "../pages/HistoryPage";
import VideoListingPage from "../pages/VideoListingPage";
import WatchLaterPage from "../pages/WatchLaterPage";
import LikedVideosPage from "../pages/LikedVideos";
import PlaylistPage from "../pages/PlaylistPage";
import VideoPlayerPage from "../pages/VideoPlayerPage";
import PlaylistListingPage from "../pages/PlaylistListingPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "../utils/authUtils/RequireAuth";

const Router = () => {
  const routes = [
    { path: "/mockman", element: <MockMan />, requireAuth: false },
    { path: "/", element: <HomePage />, requireAuth: false },
    { path: "/home", element: <HomePage />, requireAuth: false },
    { path: "/history", element: <HistoryPage />, requireAuth: true },
    { path: "/explore", element: <VideoListingPage />, requireAuth: false },
    { path: "/playlist", element: <PlaylistPage />, requireAuth: true },
    {
      path: "/userplaylist/:playlistId",
      element: <PlaylistListingPage />,
      requireAuth: true,
    },
    { path: "/watchlater", element: <WatchLaterPage />, requireAuth: true },
    { path: "/liked", element: <LikedVideosPage />, requireAuth: true },
    { path: "/login", element: <LoginPage />, requireAuth: false },
    { path: "/signup", element: <SignupPage />, requireAuth: false },
    {
      path: "/player/:playerId",
      element: <VideoPlayerPage />,
      requireAuth: false,
    },
    { path: "*", element: <ErrorPage />, requireAuth: false },
  ];
  return (
    // <Routes>
    //   <Route path="/mockman" element={<MockMan />} />
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/home" element={<HomePage />} />
    //   <Route path="/history" element={<HistoryPage />} />
    //   <Route path="/explore" element={<VideoListingPage />} />
    //   <Route path="/playlist" element={<PlaylistPage />} />
    //   <Route
    //     path="/userplaylist/:playlistId"
    //     element={<PlaylistListingPage />}
    //   />
    //   <Route path="/watchlater" element={<WatchLaterPage />} />
    //   <Route path="/liked" element={<LikedVideosPage />} />
    //   <Route path="/login" element={<LoginPage />} />
    //   <Route path="/signup" element={<SignupPage />} />
    //   <Route path="/player/:playerId" element={<VideoPlayerPage />} />
    //   <Route path="*" element={<ErrorPage />} />
    // </Routes>
    <Routes>
      {routes.map(({ path, element, requireAuth }) => (
        <Route
          path={path}
          element={requireAuth ? <RequireAuth>{element}</RequireAuth> : element}
        />
      ))}
    </Routes>
  );
};
export default Router;
