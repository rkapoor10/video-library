import {createContext, useContext, useEffect, useState} from "react"
import axios from "axios"
// create context

const VideoContext = createContext({})

//provide context

const VideoProvider = ({children})=>{
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
        <VideoContext.Provider value={{videosData}}>
            {children}
        </VideoContext.Provider>
    )
}

// use context
const useVideo = ()=> useContext(VideoContext)

export {useVideo,VideoProvider}

