import { useContext, createContext, useState, useEffect  } from "react";

// create context
const AuthContext = createContext({ isLogedIn: false });

// provide context
const AuthProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  // const [userData, setUserData] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // console.log("user",user)
    if (user) {
      setIsLogedIn(true);
      // setUserData(user.data.createdUser);
      // console.log(userData, "userData")
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLogedIn, setIsLogedIn }}
    >
      {children}
    </AuthContext.Provider>
  );  
};

// use context
const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
