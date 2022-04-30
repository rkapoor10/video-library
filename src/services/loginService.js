import axios from "axios";


const LoginService = async(user) => {
    try{
        const response = await axios.post("/api/auth/login",user)
        console.log(response, "from service provider")
        // console.log(response.data)
        // console.log(response.status,"status")
        return response
    }catch(error){
        console.error(error)
        return error
    }
}

export default LoginService