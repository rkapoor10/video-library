import React, {useEffect,useState} from "react"
import axios from "axios"
import VideoCard from "../components/cards/VideoCard";
import Filters from "../components/filters/Filters";

const VideoListingPage = () => {
    const [data, setData] = useState([])
    const fetchVideo = async ()=>{
        try{
            const {data} = await axios.get('/api/videos')
            setData(data.videos)
            console.log(data.videos)
        }
        catch(error){
            console.log("Error in fetching data")
        }
    }
    useEffect(()=>fetchVideo(),[])
  return (
    <div className="explore-page-wrapper">
      <h5>This is video Listing Page</h5>
      <Filters />
      <div className="grid-column-layout">
        {data.map((videoDetails)=>
            <VideoCard details={videoDetails}/>
        )}
      </div>
    </div>
  );
};
export default VideoListingPage;
