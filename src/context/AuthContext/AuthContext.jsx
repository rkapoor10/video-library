import {useContext, createContext, useState} from "react"


// create context
const AuthContext = createContext({isLogedIn: "false"})



// provide context
const AuthProvider = ({children}) => {
    const [isLogedIn,setIsLogedIn] = useState(false)
    return(
        <AuthContext.Provider value={{isLogedIn,setIsLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}



// use context
const useAuth  = ()=>useContext(AuthContext)
export {useAuth,AuthProvider}