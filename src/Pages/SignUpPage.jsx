import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
<<<<<<< HEAD

=======
import { FiEdit, FiMail, FiEye, FiEyeOff, FiArrowLeft } from "react-icons/fi";
>>>>>>> origin/master
import watermark from "../assets/image/first.png";
import logo from "../assets/image/nice.png";
import mobileLogo from "../assets/image/jjy.png";
import capeImage from "../assets/image/cape.png";

// Mock register function
const register = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email && userData.password) {
        resolve({ message: "Registration successful!" });
      } else {
        reject(new Error("Please fill in all fields."));
      }
    }, 1000);
  });
};

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    try {
      const response = await register(userData);
      setShowPopup(true);
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
<<<<<<< HEAD
    <div className="relative flex min-h-screen mx-auto font-sans bg-gray-50">
=======
    <div className="min-h-screen mx-auto flex bg-gray-50 relative font-sans">
      {/* Back Icon (Mobile Only) */}
      <div className="absolute top-4 left-4 block md:hidden z-30">
        <button
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <FiArrowLeft className="text-gray-600 text-xl" />
        </button>
      </div>

>>>>>>> origin/master
      {/* Watermark Logo */}
      <div className="absolute left-[50px] right-0 top-[-70px] flex items-center justify-center pointer-events-none z-0 overflow-hidden md:block hidden">
        <img
          src={watermark}
          alt="Watermark"
          className="h-[265vh] w-[700px] opacity-7"
          style={{ transform: "rotate(5deg)" }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="w-full flex-1 flex flex-col items-center justify-center md:justify-start p-0 relative z-20 mt-0 md:mt-[50px]">
          <div className="w-full max-w-[90%] md:max-w-xl p-4 md:p-8 rounded-lg">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-12">
              <img src={mobileLogo} alt="Mobile Logo" className="h-16 block md:hidden" />
              <img src={logo} alt="Desktop Logo" className="h-10 hidden md:block md:h-30" />
            </div>

            {/* Form Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-start text-[#040498] mb-4 md:mb-2">
              Create an account
            </h2>
            <p className="text-start text-base md:text-lg text-[#040498] mt-2 hidden md:block">
              Already have an account?{" "}
              <a href="/login" className="text-[#040458] hover:underline">
                Login
              </a>
            </p>

            {/* Google Sign-in Button (Mobile Only) */}
            <a href="#" className="block md:hidden">
              <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl text-base font-medium text-gray-700 bg-white hover:bg-gray-50 mb-6">
                <FcGoogle className="mr-2" /> Sign up with Google
              </button>
            </a>

            {/* Form */}
            <form className="space-y-4 md:space-y-8" onSubmit={handleRegister}>
              {/* Full Name */}
<<<<<<< HEAD
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
=======
              <div className="relative">
                <label className="hidden md:block text-base md:text-lg font-medium text-[#040498] mb-2">
>>>>>>> origin/master
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
<<<<<<< HEAD
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
=======
                  className="w-full px-2 py-3 md:px-6 md:py-5 md:border md:border-gray-300 md:rounded-md md:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg mobile-input"
                  placeholder="Full name"
>>>>>>> origin/master
                  required
                />
                <FiEdit className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base block md:hidden" />
              </div>

              {/* Email Address */}
<<<<<<< HEAD
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
=======
              <div className="relative">
                <label className="hidden md:block text-base md:text-lg font-medium text-[#040498] mb-2">
>>>>>>> origin/master
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
<<<<<<< HEAD
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
=======
                  className="w-full px-2 py-3 md:px-6 md:py-5 md:border md:border-gray-300 md:rounded-md md:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg mobile-input"
                  placeholder="Email"
>>>>>>> origin/master
                  required
                />
                <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base block md:hidden" />
              </div>

              {/* Password */}
<<<<<<< HEAD
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
=======
              <div className="relative">
                <label className="hidden md:block text-base md:text-lg font-medium text-[#040498] mb-2">
>>>>>>> origin/master
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
<<<<<<< HEAD
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
=======
                  className="w-full px-2 py-3 md:px-6 md:py-5 md:border md:border-gray-300 md:rounded-md md:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg mobile-input"
                  placeholder="Password"
>>>>>>> origin/master
                  required
                />
                {showPassword ? (
                  <FiEyeOff
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 md:top-[60%] text-gray-500 text-base cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <FiEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 md:top-[60%] text-gray-500 text-base cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>

              {/* Confirm Password */}
<<<<<<< HEAD
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-700">
=======
              <div className="relative">
                <label className="hidden md:block text-base md:text-lg font-medium text-[#040498] mb-2">
>>>>>>> origin/master
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
<<<<<<< HEAD
                  className="w-full px-6 py-5 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
=======
                  className="w-full px-2 py-3 md:px-6 md:py-5 md:border md:border-gray-300 md:rounded-md md:shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg mobile-input"
                  placeholder="Confirm password"
>>>>>>> origin/master
                  required
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 md:top-[60%] text-gray-500 text-base cursor-pointer"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <FiEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 md:top-[60%] text-gray-500 text-base cursor-pointer"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>

<<<<<<< HEAD
              {/* Terms and Conditions */}
              <div className="flex items-start mt-6 text-xl text-gray-600">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-4 cursor-pointer w-7 h-7"
                  required
                />
=======
              {/* Terms and Conditions (Desktop Only) */}
              <div className="flex items-start text-gray-600 text-sm md:text-xl hidden md:block">
                <input type="checkbox" id="terms" className="mr-4 w-5 h-5 mt-1 cursor-pointer" required />
>>>>>>> origin/master
                <label htmlFor="terms" className="leading-relaxed">
                  By clicking create account, you agree to Capsione Scholarship{" "}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">Conditions</a>.
                </label>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
<<<<<<< HEAD
                className="w-full py-5 mt-8 text-xl text-white cursor-pointer rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                style={{
                  backgroundColor: "rgba(0, 0, 254, 0.61)",
                }}
=======
                className="mt-6 w-full text-white py-3 md:py-5 text-lg md:text-xl rounded-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
                style={{ background: "linear-gradient(to right, #0000FE, #4B6CB7)" }}
>>>>>>> origin/master
              >
                Register
              </button>

              {/* Terms Text (Mobile Only) */}
              <p className="text-center text-sm text-gray-600 mt-4 block md:hidden">
                By clicking Creating account you agree to Capstone{" "}
                <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
              </p>
            </form>

            {/* OR Separator (Desktop Only) */}
            <div className="mt-6 md:mt-8 text-center hidden md:block" style={{ fontFamily: "Futura BK BT", lineHeight: "40px", letterSpacing: "0px" }}>
              <span className="text-[#000000]">OR</span>
            </div>

<<<<<<< HEAD
            {/* Google Sign-in Button */}
            <a href="#">
              <button className="flex items-center justify-center w-full px-6 py-5 mt-6 text-lg font-medium text-gray-700 bg-white border border-gray-300 shadow-sm cursor-pointer rounded-xl hover:bg-gray-50">
                <FcGoogle className="mr-2" />
                Sign up with Google
=======
            {/* Google Sign-in Button (Desktop Only) */}
            <a href="#" className="hidden md:block">
              <button className="w-full flex items-center justify-center px-6 py-5 border border-gray-300 rounded-xl shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 mt-6 cursor-pointer">
                <FcGoogle className="mr-2" /> Sign up with Google
>>>>>>> origin/master
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Image (Desktop Only) */}
        <div className="hidden md:block w-[550px] h-auto flex items-center justify-start bg-gray-100 p-0 relative before:absolute before:bg-gray-100 before:w-full before:h-full before:content-[''] before:z-10">
<<<<<<< HEAD
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
=======
          <img src={capeImage} alt="Graduation Cap" className="w-full h-auto object-contain relative z-10" />
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 z-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-xxl border border-gray-200 relative z-50">
            <h2 className="mb-4" style={{ color: "#040498", fontFamily: "Futura Medium, sans-serif", fontSize: "32.24px", lineHeight: "35.8px", fontWeight: 500 }}>
              Hey Scholar, Your account has been created
            </h2>
            <p className="mb-6" style={{ color: "#0B0B0B", fontFamily: "Futura BK BT, sans-serif", fontSize: "24.62px", lineHeight: "41px" }}>
              Get started to explore all scholarship opportunities here.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{ backgroundColor: "#0000FE", width: "311px", height: "57px", color: "#FFFFFF", borderRadius: "8px", fontSize: "18px", fontWeight: "500", transition: "background-color 0.3s ease" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0000CC")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0000FE")}
            >
              Get Started
            </button>
>>>>>>> origin/master
          </div>
        </div>
      )}

      {/* Mobile-Specific Styles */}
      <style>
        {`
          @media (max-width: 767px) {
            .min-h-screen {
              background-color: #F5F7FA !important;
            }
            .mobile-input {
              border: none !important;
              border-bottom: 1px solid #d1d5db !important;
              border-radius: 0 !important;
              padding-right: 2.5rem !important;
              background: transparent !important;
              box-shadow: none !important;
              height: 40px !important;
            }
            .mobile-input:focus {
              border-bottom: 1px solid #3b82f6 !important;
              outline: none !important;
            }
            .mobile-input::placeholder {
              color: #040498 !important;
              font-weight: 500 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SignUpPage;  