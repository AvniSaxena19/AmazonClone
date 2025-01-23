import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const user = useSelector((state) => state.auth.user);
//   const location = useLocation();
  console.log(user)
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/SignUp"/>
  );
};

export default Auth;


