import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const { user, loading } = useContext(AuthContext);

  console.log(user);

  if (loading) {
    return (
      <span className="loading loading-ring loading-lg flex items-center mx-auto min-h-screen"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
