import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };
  export default PrivateRoutes;