import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    phone: "",
    address: "",
    membershipType: "I",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fronttest-taupe.vercel.app/api/auth/register",
        formData
      );
      alert("User registered successfully");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center p-4 md:p-20">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-xl lg:max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-700 mb-4 sm:mb-6">
            Create Account
          </h2>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
          >
            {/* Username Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-gray-600 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                id="username"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* First Name and Last Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-600 font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* Address Field (Full Width) */}
            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-gray-600 font-medium mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                id="address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>

            {/* Email and Password (Side by Side) */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                required
              />
            </div>

            {/* Phone and Membership Type (Side by Side) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-600 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label
                htmlFor="membershipType"
                className="block text-gray-600 font-medium mb-2"
              >
                Membership Type
              </label>
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                id="membershipType"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              >
                <option value="I">Type I</option>
                <option value="II">Type II</option>
                <option value="III">Type III</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 sm:col-span-2">
              <button
                type="submit"
                className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
