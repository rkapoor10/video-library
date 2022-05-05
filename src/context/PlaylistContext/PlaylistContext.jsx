import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

// create context
const defaultContextValue = {};
const PlaylistContext = createContext(defaultContextValue);

// provide context

const PlaylistProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [newVideo , setNewVideo]  = useState({})
  const initialPlaylistState = [
    {
      id: uuid(),
      title: "Watch Again",
      channelName: "channel one",
      visibility: "private",
      videos: [],
    },
    {
      id: uuid(),
      title: "Favourites",
      channelName: "channel two",
      visibility: "private",
      videos: [],
    },
    {
      id: uuid(),
      title: "Exercise",
      channelName: "channel one",
      visibility: "private",
      videos: [],
    },
    {
      id: uuid(),
      title: "Training",
      channelName: "channel one",
      visibility: "public",
      videos: [],
    },
    {
      id: uuid(),
      title: "Matches",
      channelName: "channel one",
      visibility: "private",
      videos: [],
    },
  ];

  const playlistReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_TO_NEW_PLAYLIST":
        return [
          ...state,
          {
            id: uuid(),
            title: payload.title,
            channelName:"user",
            visibility: payload.visibility,
            videos: [payload.video],
          },
        ];
      case "ADD_TO_PLAYLIST":
        return state.map((playlist) =>
          playlist.id === payload.id
            ? { ...playlist, videos: [...playlist.videos, payload.video] }
            : playlist
        );
      case "REMOVE_FROM_PLAYLIST":
        return state.map((playlist) =>
          playlist.id === payload.id
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) =>video.id !== payload.video.id
                ),
              }
            : playlist
        );
      case "DELETE_PLAYLIST":
        return state.filter((playlist) => playlist.id !== payload.id);
      default:
        return state;
    }
  };

  const [playlistState, playlistDispatch] = useReducer(
    playlistReducer,
    initialPlaylistState
  );
  return (
    <PlaylistContext.Provider
      value={{ playlistState, playlistDispatch, openModal, setOpenModal, newVideo, setNewVideo}}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

// useContext
const usePlaylist = () => useContext(PlaylistContext);

// export context
export { PlaylistProvider, usePlaylist };
