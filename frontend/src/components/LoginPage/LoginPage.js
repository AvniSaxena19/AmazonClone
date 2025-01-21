import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      })
      .then((res) => {
        console.log(res);
        navigate("/signup");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create account
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First and last name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email (mobile for some countries)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email or mobile phone number"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <small className="text-xs text-gray-600">
              Password must be at least 6 characters long.
            </small>
          </div>

          {/* confirmPassword */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              confirmPassword
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 transition duration-200"
          >
            Create your Amazon account
          </button>
        </form>

        {/* Terms and Conditions */}
        <div className="mt-4 text-xs text-center text-gray-600">
          <p>
            By creating an account, you agree to Amazon's{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Notice
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
