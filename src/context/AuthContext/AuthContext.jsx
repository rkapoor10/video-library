import { useContext, createContext, useState, useEffect  } from "react";

// create context
const AuthContext = createContext({ isLogedIn: false });

// provide context
const AuthProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isLogedIn, setIsLogedIn] = useState(user);

  useEffect(() => {
    if (user) {
      setIsLogedIn(true);
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
