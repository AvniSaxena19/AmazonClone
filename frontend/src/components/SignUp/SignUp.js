import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser} from "../../utility/authSlice";
import { useDispatch } from "react-redux";
import { loggedInUser } from "../../utility/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  console.log(password);
  const [name, setName] = useState("");
  console.log(name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email:name, password })
      .then((res) => {
        console.log(res);
        dispatch(loggedInUser(true));
        dispatch(setUser(name));
        navigate("/Profile");
      })
      .catch((err) => {
        const errMsg = err?.response?.data?.message || "Something went wrong";
        setError(errMsg);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
            className="w-24"
          />
        </div>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <h2 className="text-xl font-semibold text-gray-800">Sign-In</h2>

          {/* Email Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name or Mobile Phone Number
            </label>
            <input
              type="name"
              id="name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:outline-none"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500"
          >
            Sign In
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {/* Create Account Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New to Amazon?{" "}
            <Link to="/Login" className="text-yellow-500 hover:underline">
              Create your Amazon account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;