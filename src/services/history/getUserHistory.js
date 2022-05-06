import axios from "axios";

export const getUserHistory = async() => {
    try{
        const response = await axios.get("/api/user/history")
        console.log(response, "response of getUserHistory")
    }
    catch(error){
        console.error("Error from getUserHistory")
    }
}