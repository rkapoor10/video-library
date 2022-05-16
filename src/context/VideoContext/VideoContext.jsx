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
  const [videosData, setVideosData] = useState([]);
  // const initialVideoState = {
  //   likedVideos: [],
  //   watchLaterVideos: [],
  //   history: [],
  // };
  const userString = localStorage.getItem("user");
  const initialVideoState = {
    likedVideos: userString ? [...JSON.parse(userString).likes] : [],
    watchLaterVideos: userString ? [...JSON.parse(userString).watchlater] : [],
    history: userString ? [...JSON.parse(userString).history] : [],
  };
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    initialVideoState
  );
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
