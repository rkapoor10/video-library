import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

const RequireAuth = ({ children }) => {
  const { isLogedIn } = useAuth();
  const location = useLocation();
  return isLogedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
