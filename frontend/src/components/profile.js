import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utility/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex items-center flex-col mb-6">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-4">
            {user.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Hello, {user}</h1>
          <p className="text-gray-500 mt-2">Welcome to your profile page!</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { removeUser } from "../utility/userSlice";

// const Profile = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   const handleLogout = () => {
//     dispatch(removeUser());
//     // localStorage.removeItem('token');
//     // localStorage.removeItem('refresh_token')
//     navigate('/SignUp');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold text-center text-gray-800">User Profile</h1>
//         <h2 className="mt-4 text-lg text-center text-gray-600">
//           Hi, <span className="font-semibold text-blue-600">{user}</span>
//         </h2>
//         <div className="flex flex-col mt-6">
//           <button
//             onClick={()=>
//               handleLogout}
//             className="py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
//           >
//             Logout
//           </button>
//           <Link
//             to="/"
//             className="mt-4 text-center text-sm text-gray-500 hover:text-gray-700"
//           >
//             Go back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;