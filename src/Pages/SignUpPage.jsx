import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import watermark from "../assets/image/first.png";
import logo from "../assets/image/nice.png";
import capeImage from "../assets/image/cape.png";

// Mock register function for testing
const register = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Registration successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Form submission intercepted");

    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    console.log("Form data:", userData);

    try {
      console.log("Calling register API...");
      const response = await register(userData); // Call the register function
      console.log("Registration successful:", response);
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error("Registration failed:", error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="relative flex min-h-screen mx-auto font-sans bg-gray-50">
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
        <div className="w-full flex-1 flex flex-col items-center justify-start p-0 relative z-20 mt-[50px]"> {/* z-20 for sign-up page */}
          <div className="w-full max-w-xl p-8 rounded-lg">
            {/* Logo */}
            <div className="flex justify-start mb-12">
              <img src={logo} alt="Capsione Scholarship Logo" className="h-30" />
            </div>

            {/* Form Title */}
            <h2 className="text-4xl font-semibold text-start text-[#040498]">
              Create an account
            </h2>
            <p className="text-start text-lg text-[#040498] mt-2">
              Already have an account?{" "}
              <a href="/login" className="text-[#040458] hover:underline">
                Login
              </a>
            </p>

            {/* Form */}
            <form className="mt-8 space-y-8" onSubmit={handleRegister}>
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start mt-6 text-xl text-gray-600">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-4 cursor-pointer w-7 h-7"
                  required
                />
                <label htmlFor="terms" className="leading-relaxed">
                  By clicking create account, you agree to Capsione Scholarship{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Conditions
                  </a>
                  .
                </label>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full py-5 mt-8 text-xl text-white cursor-pointer rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                style={{
                  backgroundColor: "rgba(0, 0, 254, 0.61)",
                }}
              >
                Create account
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
              <button className="flex items-center justify-center w-full px-6 py-5 mt-6 text-lg font-medium text-gray-700 bg-white border border-gray-300 shadow-sm cursor-pointer rounded-xl hover:bg-gray-50">
                <FcGoogle className="mr-2" />
                Sign up with Google
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:block w-[550px] h-auto flex items-center justify-start bg-gray-100 p-0 relative before:absolute before:bg-gray-100 before:w-full before:h-full before:content-[''] before:z-10">
          <img
            src={capeImage}
            alt="Graduation Cap"
            className="relative z-10 object-contain w-full h-auto"
          />
        </div>
      </div>


      {/* {popup messagae} */}

        {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Semi-transparent overlay with reduced opacity */}
        <div
          className="fixed inset-0 z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Lighter overlay
        ></div>

          {/* Popup Container */}
          <div className="relative z-50 p-8 text-center bg-white border border-gray-200 shadow-lg rounded-xl max-w-xxl">
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
        Hey Scholar, Your account has been created
        </h2>

        <p className="mb-6" 
        style={{
          color: "#0B0B0B",
          fontFamily: "Futura BK BT, sans-serif",
          fontSize: "24.62px",
          lineHeight: "41px",
        }}
        >
        Get started to explore all scholarship opportunities here.
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

export default SignUpPage;