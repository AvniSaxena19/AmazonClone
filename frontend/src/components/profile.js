import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <>
      <div className="flex items-center space-x-4 mb-6">
        
        <div>
          <h1 className="text-xl font-semibold">{user}</h1>
          <p className="text-gray-500">Prime Member</p>
        </div>
      </div>
    </>
  );
};

export default Profile;