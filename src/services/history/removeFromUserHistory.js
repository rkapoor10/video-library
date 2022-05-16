import axios from "axios";
import { toast } from "react-toastify";

export const removeFromUserHistory = (videoId) => {
    try{
        const response  = axios.delete("/api/user/history/:videoId")
        console.log(response, "deleted video")
    }catch(error){
        console.error(error)
        toast.error("history video deletion failed")
    }
}