import {createContext, useContext, useEffect, useReducer, useState} from "react"
import axios from "axios"
// create context

const VideoContext = createContext({})

//provide context

const VideoProvider = ({children})=>{
    const initialVideoState = { likedVideos: [] , watchLaterVideos: [] , history: []}
    const videoReducer = (state,action) => {
        const {type,payload} = action
        switch(type){
            case "LIKED_VIDEO":
                return {...state, likedVideos:[...state.likedVideos, payload]}
            case "REMOVE_FROM_LIKED":
                return {...state, likedVideos:state.likedVideos.filter((video)=>video.id!==payload.id)}
            case "ADD_TO_WATCHLATER":
                return {...state, watchLaterVideos:[...state.watchLaterVideos, payload]}
            case "REMOVE_FROM_WATCHLATER":
                return {...state, watchLaterVideos:state.watchLaterVideos.filter((video)=>video.id!==payload.id)}
            case "ADD_TO_HISTORY":
                return {...state, history:[...state.history, payload]}
            case "REMOVE_FROM_HISTORY":
                return {...state, history:state.history.filter((video)=>video.id!==payload.id)}
            default:
                return state
        }

    }
    const [videoState, videoDispatch] = useReducer(videoReducer,initialVideoState)
    const [videosData, setVideosData] = useState([])
    const fetchVideo = async ()=>{
        try{
            const {data} = await axios.get('/api/videos')
            setVideosData(data.videos)
        }
        catch(error){
            console.log("Error in fetching data")
        }
    }
    useEffect(()=>fetchVideo(),[])
    return(
        <VideoContext.Provider value={{videosData,videoState,videoDispatch}}>
            {children}
        </VideoContext.Provider>
    )
}

// use context
const useVideo = ()=> useContext(VideoContext)
export {useVideo,VideoProvider}

