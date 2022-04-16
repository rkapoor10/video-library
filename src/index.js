import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext/VideoContext";
import { FilterProvider } from "./context/FilterContext/FilterContext";
import { PlaylistProvider } from "./context/PlaylistContext/PlaylistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <PlaylistProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </PlaylistProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
