import axios from "axios";


const LoginService = async(user) => {
    try{
        const response = await axios.post("/api/auth/login",user)
        return response
    }catch(error){
        console.error(error)
        return error
    }
}

export default LoginService