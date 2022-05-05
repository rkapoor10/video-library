import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import videoReducer from "./VideoReducer";
import { toast } from "react-toastify";
// create context

const VideoContext = createContext({});

//provide context

const VideoProvider = ({ children }) => {
  const initialVideoState = {
    likedVideos: [...JSON.parse(localStorage.getItem("user")).likes],
    watchLaterVideos: [...JSON.parse(localStorage.getItem("user")).watchlater],
    history: [...JSON.parse(localStorage.getItem("user")).history],
  };
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
  const [videosData, setVideosData] = useState([]);
  const fetchVideo = async () => {
    try {
      const { data } = await axios.get("/api/videos");
      setVideosData(data.videos);
    } catch (error) {
      console.log("Error in fetching data");
    }
  };
  useEffect(() => fetchVideo(), []);

 

  return (
    <VideoContext.Provider value={{ videosData, videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

// use context
const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };
