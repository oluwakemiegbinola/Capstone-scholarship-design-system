import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import watermark from "../assets/image/first.png";
import logo from "../assets/image/nice.png";
import capeImage from "../assets/image/cape.png";

// Mock login function for testing
const login = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Login successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Form submission intercepted");

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    console.log("Form data:", userData);

    try {
      console.log("Calling login API...");
      const response = await login(userData); // Call the login function
      console.log("Login successful:", response);
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error("Login failed:", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen mx-auto flex bg-gray-50 relative font-sans">
      {/* Watermark Logo */}
      <div className="absolute left-[50px] right-0 top-[-70px] flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          src={watermark}
          alt="Watermark"
          className="h-[265vh] w-[700px] opacity-7"
          style={{
            transform: "rotate(5deg)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section - Form */}
        <div className="w-full flex-1 flex flex-col items-center justify-start p-0 relative z-20 mt-[50px]">
          <div className="w-full max-w-xl p-8 rounded-lg">
            {/* Logo */}
            <div className="flex justify-start mb-12">
              <img src={logo} alt="Capsione Scholarship Logo" className="h-30" />
            </div>

            {/* Form Title */}
            <h2 className="text-4xl font-semibold text-start text-[#040498]">
              Login to your account
            </h2>
            <p className="text-start text-lg text-[#040498] mt-2">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#040458] hover:underline">
                Sign Up
              </a>
            </p>

            {/* Form */}
            <form className="mt-8 space-y-8" onSubmit={handleLogin}>
              {/* Email Address */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="mt-8 w-full text-white py-5 text-xl rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
                style={{
                  backgroundColor: "rgba(0, 0, 254, 0.61)",
                }}
              >
                Login
              </button>
            </form>

            {/* OR Separator */}
            <div
              className="mt-8 text-center"
              style={{
                fontFamily: "Futura BK BT",
                lineHeight: "40px",
                letterSpacing: "0px",
              }}
            >
              <span className="text-[#000000]">OR</span>
            </div>

            {/* Google Sign-in Button */}
            <a href="#">
              <button className="w-full flex items-center justify-center px-6 py-5 border border-gray-300 rounded-xl shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 mt-6 cursor-pointer">
                <FcGoogle className="mr-2" />
                Login with Google
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block w-[550px] h-auto flex items-center justify-start bg-gray-100 p-0 relative before:absolute before:bg-gray-100 before:w-full before:h-full before:content-[''] before:z-10">
          <img
            src={capeImage}
            alt="Graduation Cap"
            className="w-full h-auto object-contain relative z-10"
          />
        </div>
      </div>

      {/* {popup message} */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Semi-transparent overlay with reduced opacity */}
          <div
            className="fixed inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          ></div>

          {/* Popup Container */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-xxl border border-gray-200 relative z-50">
            <h2
              className="mb-4"
              style={{
                color: "#040498",
                fontFamily: "Futura Medium, sans-serif",
                fontSize: "32.24px",
                lineHeight: "35.8px",
                fontWeight: 500,
              }}
            >
              Welcome back, Scholar!
            </h2>

            <p
              className="mb-6"
              style={{
                color: "#0B0B0B",
                fontFamily: "Futura BK BT, sans-serif",
                fontSize: "24.62px",
                lineHeight: "41px",
              }}
            >
              You're logged in. Let's explore scholarship opportunities.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                backgroundColor: "#0000FE",
                width: "311px",
                height: "57px",
                color: "#FFFFFF",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: "500",
                transition: "background-color 0.3s ease", // Smooth transition
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0000CC")} // Hover color
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0000FE")} // Default color
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
