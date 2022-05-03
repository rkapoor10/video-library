const token  = localStorage.getItem("token")

export const axiosConfig = {
    
    headers: {
        authorization: token
    }
}

